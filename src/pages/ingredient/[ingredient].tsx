import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import MealCard from "@/components/MealCard";

interface Meals {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

function IngredientName() {
  const router = useRouter();
  const { ingredient } = router.query;

  const [meals, setMeals] = useState<Meals[]>([]);

  useEffect(() => {
    const getMeals = async () => {
      const { data } = await axios.get(`/api/ingredients?name=${ingredient}`);
      setMeals(data);
    };
    getMeals();
  }, [ingredient]);

  return (
    <>
      <Navbar />
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2">
          {meals?.map((meal) => (
            <Link href={`/meal/${meal.idMeal}`} key={meal.idMeal}>
              <MealCard props={meal} />
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export default IngredientName;
