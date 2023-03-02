import axios from "axios";

export const getMeal = async (id: BigInteger) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/lookup.php?i=${id}`
  );
  return data.meals;
};
