import React from 'react';
import { Box } from "@mui/material";

import { Loading } from '../../UI';
import { DataMiniGraph } from '../Charts';
import { apiServerLocal } from '@/services/api';
import { format } from 'utils/NumberUtil';
import { DonutsChart } from '../Charts/Donuts';
import { SimpleBarChart } from '../Charts/SimpleBar';

export function CasosTab() {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState({
    porSituacaoData: [],
    porFaixaEtariaData: [],
    novosCasos: {
      valor: '',
      percentual_variacao: '',
    },
    totalCasos: {
      valor: '',
      percentual_variacao: '',
    },
  });

  React.useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const { data } = await apiServerLocal.get('/api/dashboard/casos');

      setData(data);
      setLoading(false);
    };
    getData();
  }, []);

  const qt_novos = {
    nome: "Novos Casos",
    valor: format({ value: data.novosCasos.valor }),
  };
  const qt_total = {
    nome: "Total de Casos",
    valor: format({ value: data.totalCasos.valor }),
  };

  const qt_novo = {
    qt_novos,
    qt_total,
  };

  const dadosRecuperadosAtivos = data.porSituacaoData.map((d: any) => ({
    name: d.situacao,
    value: d.valor
  }));

  return (
    loading
      ? <Loading />
      : <>
          <Box sx={{
            padding: "30px 0",
            background: "#FFFFFF",
            borderRadius: "20px",
            width: "100%",
            marginBottom: "40px"
          }}>
            <Box sx={{ width: "100%" }}>

              <DataMiniGraph qt_data={qt_novo} />

              <DonutsChart
                data={dadosRecuperadosAtivos}
                tooltipFormatter={(params: any) => {
                  return `${params.name}<br/>
                    Total: ${params.data.value}<br/>
                    Porcentagem: ${params.percent}%`;
                }}
              />
              <Box sx={{ mt: 2, padding: 5 }}>
                <SimpleBarChart
                  title='Faixa Etária'
                  xAxisData={data.porFaixaEtariaData.map((d: any) => d.faixa_etaria)}
                  seriesData={data.porFaixaEtariaData.map((d: any) => d.total_casos)}
                />
              </Box>
            </Box>
          </Box>
      </>
  )
}
