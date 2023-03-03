import axios from "axios";

export const getMeal = async (id: BigInteger) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/json/v1/1/lookup.php?i=${id}`
  );
  return data.meals;
};
