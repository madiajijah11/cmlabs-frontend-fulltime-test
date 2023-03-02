import IngredientCard from "@/components/IngredientCard";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";

interface Ingredient {
  idIngredient: string;
  strIngredient: string;
  strDescription: string;
  strType: string;
}

export default function Home() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  // Fetch ingredients
  useEffect(() => {
    const getIngredients = async () => {
      const { data } = await axios.get("/api/ingredients");
      setIngredients(data);
    };
    getIngredients();
  }, []);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [ingredientsPerPage] = useState(20);

  // Get current ingredients
  const indexOfLastIngredient = currentPage * ingredientsPerPage;
  const indexOfFirstIngredient = indexOfLastIngredient - ingredientsPerPage;
  const currentIngredients = ingredients.slice(
    indexOfFirstIngredient,
    indexOfLastIngredient
  );

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Convert ingredients name to lowercase and remove spaces add _ instead
  const convertName = (name: string) => {
    return name.toLowerCase().replace(/ /g, "_");
  };

  return (
    <>
      <Navbar />
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2">
          {currentIngredients.map((ingredient) => (
            <Link
              href={`/ingredient/${convertName(ingredient.strIngredient)}`}
              key={ingredient.idIngredient}
            >
              <IngredientCard props={ingredient} />
            </Link>
          ))}
        </div>
        <div className="flex justify-center btn-group mt-2">
          <button
            className="btn btn-primary"
            disabled={currentPage === 1}
            onClick={() => paginate(currentPage - 1)}
          >
            Previous
          </button>
          <button className="btn btn-primary">
            Page {currentPage} of{" "}
            {Math.ceil(ingredients.length / ingredientsPerPage)}
          </button>
          <button
            className="btn btn-primary"
            disabled={currentIngredients.length < 20}
            onClick={() => paginate(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </main>
    </>
  );
}
