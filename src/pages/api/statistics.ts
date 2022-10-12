import type { NextApiRequest, NextApiResponse } from 'next'
import { getStatistics } from "../../services/api";

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const jsonData = await getStatistics();
  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
  res.status(200).json(jsonData);
}
