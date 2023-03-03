import IngredientCard from "@/components/IngredientCard";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Ingredient } from "@/types";
import SearchInputAndButton from "@/components/SearchInputAndButton";

export default function Home() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [search, setSearch] = useState("");
  const [filteredIngredients, setFilteredIngredients] =
    useState<Ingredient[]>(ingredients);

  // Fetch ingredients
  useEffect(() => {
    const getIngredients = async () => {
      const { data } = await axios.get("/api/ingredients");
      setIngredients(
        // Sort ingredients alphabetically
        data.sort((a: Ingredient, b: Ingredient) =>
          a.strIngredient > b.strIngredient ? 1 : -1
        )
      );
    };
    getIngredients();
  }, []);

  // Filter ingredients
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setFilteredIngredients(
      ingredients?.filter((ingredient) =>
        ingredient.strIngredient.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  // Convert ingredients name to lowercase and remove spaces add _ instead
  const convertName = (name: string) => {
    return name?.toLowerCase().replace(/ /g, "_");
  };

  return (
    <>
      <Navbar />
      <main>
        <h1 className="text-center text-3xl font-bold mt-4 flex-1">
          Ingredients
        </h1>
        <div className="p-2 flex w-full justify-end">
          <SearchInputAndButton
            setSearch={setSearch}
            handleSubmit={handleSubmit}
            search="ingredient..."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2">
          {filteredIngredients && filteredIngredients.length > 0
            ? filteredIngredients?.map((ingredient) => (
                <Link
                  href={`/ingredient/${convertName(ingredient.strIngredient)}`}
                  key={ingredient.idIngredient}
                >
                  <IngredientCard props={ingredient} />
                </Link>
              ))
            : ingredients?.map((ingredient) => (
                <Link
                  href={`/ingredient/${convertName(ingredient.strIngredient)}`}
                  key={ingredient.idIngredient}
                >
                  <IngredientCard props={ingredient} />
                </Link>
              ))}
        </div>
      </main>
    </>
  );
}
