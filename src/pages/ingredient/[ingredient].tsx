import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import MealCard from "@/components/MealCard";
import { Meals } from "@/types";
import SearchInputAndButton from "@/components/SearchInputAndButton";
import Breadcrumbs from "@/components/Breadcrumbs";

function IngredientName() {
  const router = useRouter();
  const { ingredient } = router.query;

  const [meals, setMeals] = useState<Meals[]>([]);
  const [search, setSearch] = useState("");
  const [filteredMeals, setFilteredMeals] = useState<Meals[]>(meals);

  useEffect(() => {
    const getMeals = async () => {
      const { data } = await axios.get(`/api/ingredients?name=${ingredient}`);
      setMeals(data);
    };
    getMeals();
  }, [ingredient]);

  // Filter meals
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setFilteredMeals(
      meals?.filter((meal) =>
        meal.strMeal.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  return (
    <>
      <Navbar />
      <main>
        <h1 className="text-center text-3xl font-bold mt-4 flex-1">Meals</h1>
        <div className="p-2 flex w-full items-center justify-end">
          <SearchInputAndButton
            setSearch={setSearch}
            handleSubmit={handleSubmit}
            search="meal..."
          />
        </div>
        <div className="px-2">
          <Breadcrumbs path={ingredient as string} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2">
          {filteredMeals?.length > 0
            ? filteredMeals.map((meal) => (
                <div key={meal.idMeal}>
                  <MealCard props={meal} />
                </div>
              ))
            : meals?.map((meal) => (
                <div key={meal.idMeal}>
                  <MealCard props={meal} />
                </div>
              ))}
        </div>
      </main>
    </>
  );
}

export default IngredientName;
