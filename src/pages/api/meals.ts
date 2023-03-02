import type { NextApiRequest, NextApiResponse } from "next";

import { getMeal } from "../../lib/meals";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (id) {
    const meal = await getMeal(id as unknown as BigInteger);
    return res.status(200).json(meal[0]);
  }
}
