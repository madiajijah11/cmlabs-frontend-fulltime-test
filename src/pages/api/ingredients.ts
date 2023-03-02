import type { NextApiRequest, NextApiResponse } from "next";

import { getIngredients, getIngredient } from "../../lib/ingredients";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name } = req.query;

  if (name) {
    const ingredient = await getIngredient(name as string);
    return res.status(200).json(ingredient);
  } else {
    const ingredients = await getIngredients();
    return res.status(200).json(ingredients);
  }
}
