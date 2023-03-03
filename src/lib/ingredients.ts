import axios from "axios";

export const getIngredients = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/json/v1/1/list.php?i=list`
  );
  return data.meals;
};

export const getIngredient = async (name: string) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/json/v1/1/filter.php?i=${name}`
  );
  return data.meals;
};
