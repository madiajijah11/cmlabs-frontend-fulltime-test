import axios from "axios";

export const getIngredients = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/list.php?i=list`
  );
  return data.meals;
};

export const getIngredient = async (name: string) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/filter.php?i=${name}`
  );
  return data.meals;
};
