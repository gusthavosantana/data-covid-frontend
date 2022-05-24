// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import api from '@/services/api';
import type { NextApiRequest, NextApiResponse } from 'next'

export type DadosPorRegiao = {
  [key: string]: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DadosPorRegiao>
) {
  const params = req.query || {};

  const { data: vacina } = await api.get('/vacinas/dados-por-regiao', { params });
  const { data: casos } = await api.get('/casos/dados-por-regiao', { params });

  res.status(200).json({
    vacina,
    casos,
  });
}
