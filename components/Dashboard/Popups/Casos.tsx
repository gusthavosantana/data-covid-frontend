
import { Box, Typography } from '@mui/material'
import React from 'react'
import { DataMiniGraph } from '../Charts'
import { format } from 'utils/NumberUtil';

type DadosCasosPorRegiao = {
    data: {
        regiao: string;
        novos_casos: string;
        total_casos: string;
        variacao_novos_casos: string;
        variacao_total_casos: string;
    },
};

export function CasosPopup({ data }: DadosCasosPorRegiao) {
  const {
    novos_casos,
    total_casos,
  } = data;

  const qt_novos = {
    nome: "Novos Casos",
    valor: format({ value: novos_casos }),
  };
  const qt_total = {
    nome: "Total de Casos",
    valor: format({ value: total_casos }),
  };

  return (
    <Box sx={{ background: "#FFFFFF", borderRadius: 4 }}>
        <Typography>
            Casos de Covid-19
        </Typography>
        <Box>
          <DataMiniGraph qt_data={{
            qt_novos,
            qt_total,
          }} />
        </Box>
    </Box>
  )
}
