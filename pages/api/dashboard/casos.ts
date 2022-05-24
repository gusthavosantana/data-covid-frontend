// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import api from '@/services/api';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  porSituacaoData: any;
  porFaixaEtariaData: any;
  novosCasos: any;
  totalCasos: any;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  let params = req.query || {};

  const { data: porSituacaoData } = await api.get('/casos/total-casos-por-situacao', { params });
  const { data: porFaixaEtariaData } = await api.get('/casos/casos-por-faixa-etaria', { params });
  const { data: novosCasos } = await api.get('/casos/novos-casos', { params });
  const { data: totalCasos } = await api.get('/casos/total-casos', { params });

  res.status(200).json({
    porSituacaoData,
    porFaixaEtariaData,
    novosCasos,
    totalCasos,
  });
}
