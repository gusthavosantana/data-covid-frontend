import * as React from 'react';
import dynamic from 'next/dynamic';
import Structure from '@/components/Structure';
import type { NextPage } from 'next';
import { Grid, Paper, Tab, Tabs } from '@mui/material';

import '@fontsource/roboto';
import { Loading } from '@/components/UI';
import api, { apiServerLocal } from '@/services/api';
import { DadosPorRegiao } from './api/dashboard/dados-por-regiao';
import { TabContent } from '@/components/Dashboard/Tabs/Content';

const Dashboard: NextPage = () => {

  const [activeTab, setActiveTab] = React.useState('vacina');
  const [dadosRegiao, setDadosRegiao] = React.useState<DadosPorRegiao>({});

  React.useEffect(() => {
    async function fetchDadosRegiao() {
      const { data } = await apiServerLocal.get('/api/dashboard/dados-por-regiao');
      setDadosRegiao(data);
    }

    fetchDadosRegiao();
  }, [activeTab]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  const MapBox = React.useMemo(() => dynamic(
    () => import('@/components/MapBox'),
    {
      loading: () => (
        <div style={{ height: '385px' }} >
          <Loading />
        </div>),
      ssr: false
    }
  ), []);

  return (
    <Structure config={{ namePage: 'Dashboard',page: '/' }}>
      <Paper elevation={1} sx={{ background: 'transparent' }}>
        <Grid container>
          <Grid item xs={5}>
            <Tabs
              value={activeTab}
              onChange={handleChange}
              sx={{
                background: 'white',
                borderRadius: '5px 5px 0 0'
              }}
            >
              <Tab value='vacina' label='VACINA' sx={{ width: "50%" }} />
              <Tab value='casos' label='CASOS' sx={{ width: "50%" }} />
            </Tabs>
            {
              <TabContent active={activeTab} />
            }
          </Grid>
          <Grid item xs={7} sx={{ background: 'white', borderRadius: 3 }} boxShadow="sm">
            <MapBox active={activeTab} region={dadosRegiao[activeTab]} />
          </Grid>
        </Grid>
      </Paper>
    </Structure>
  )
}

export default Dashboard;

