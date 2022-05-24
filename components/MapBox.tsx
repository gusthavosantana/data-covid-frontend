import React from 'react';
import ReactDOMServer from 'react-dom/server';
import styled from 'styled-components';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import { icon } from 'leaflet';

import layerRideGeojson from '@/config/geojson/rasDF';
import { VacinaPopup } from './Dashboard/Popups/Vacina';
import { CasosPopup } from './Dashboard/Popups/Casos';

import 'leaflet/dist/leaflet.css';
import { Loading } from './UI';

import { apiServerLocal } from '@/services/api';

interface MapColorOption {
  cor: string;
  minimo: number;
  maximo: number;
}
interface RangeMapConfig {
  [key: string]: MapColorOption[];
}
interface MapColorConfig {
  [key: string]: {
    field: string;
    options: MapColorOption[]
  }
};

const UBSPopup = styled(Popup)`
  .leaflet-popup-content-wrapper {
    max-width: 150px;
  }
`;

const markerIcon = icon({
  iconUrl: '/data-covid/marker-icon.png',
  shadowUrl: '/data-covid/marker-shadow.png',
  iconRetinaUrl: '/data-covid/marker-icon-2x.png',
});

const PopupRegion = ({ regiao, feature, tab }: any) => {
  let render;
  switch (tab) {
    case 'vacina':
      render = <VacinaPopup data={feature} />
      break;
    case 'casos':
      render = <CasosPopup data={feature} />
      break;
    default:
      break;
  }
  return (
    <div>
      <span>{regiao}</span>
      {render}
    </div>
  );
};

export default function MapBox({ active, region }: any) {
  const [loading, setLoading] = React.useState(false);
  const [rangeMap, setRangeMap] = React.useState<RangeMapConfig>();

  React.useEffect(() => {
    const getRangesMapa = async () => {
      const {data} = await apiServerLocal.get('/api/dashboard/range-color-map');
      setRangeMap(data);
    }
    getRangesMapa();
  }, []);
  
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 500)
  }, [active]);

  if (!region) {
    return <Loading />;
  }

  const ubs = Object.values(region)
    .reduce((prev, curr) => {
      const item = curr as any;
      return [
        ...prev as any[],
        ...item.ubs
      ];
    }, []) as any[];

  const onEachFeature = (feature: any, layer: any) => {
    const regionData = region[feature.properties.reg_saude];
    const popupContent = ReactDOMServer.renderToString(
      <PopupRegion
        regiao={feature.properties.reg_saude}
        feature={regionData}
        tab={active}
      />
    );
    layer.bindPopup(popupContent);
  };

  const getColorByRegion = (feature: any) => {
    let regionName = feature?.properties?.reg_saude;
    const mapConfigColor: MapColorConfig = {
      vacina: {
        field: 'dose única',
        options: rangeMap ? rangeMap['Vacina'] : []
      },
      casos: {
        field: 'total_casos',
        options: rangeMap ? rangeMap['Casos'] : []
      }
    }

    const getColorByRange = () => {
      const rangeConfig = mapConfigColor[active];
      const value = region[regionName][rangeConfig?.field];
      const range = rangeConfig?.options?.find((option: any) => 
        value > parseFloat(option.minimo) && value < parseFloat(option.maximo)
      );
      return range?.cor || '#01386B';
    }

    return {
      fillColor: getColorByRange(),
      weight: 1,
      opacity: 1,
      color: 'white',
      dashArray: '0',
      fillOpacity: 0.4
    }
  }

  return loading
    ? <Loading />
    : (
      <MapContainer
        center={[-15.80, -47.87]}
        zoom={10}
        scrollWheelZoom={true}
        style={{ height: '100%', width: "100%" }}>
        <TileLayer
          attribution=''
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON
          key={'my-map-RIDE'}
          //@ts-ignore
          data={layerRideGeojson}
          onEachFeature={onEachFeature}
          style={getColorByRegion}
        >
        </GeoJSON>
        {
          ubs.map((current: any) => (
            <Marker
              key={current.id}
              position={[
                current.latitude,
                current.longitude,
              ]}
              title={current.nome}
              icon={markerIcon}
            >
              <UBSPopup>
                {current.nome}
              </UBSPopup>
            </Marker>
          ))
        }
      </MapContainer>
    )
}
