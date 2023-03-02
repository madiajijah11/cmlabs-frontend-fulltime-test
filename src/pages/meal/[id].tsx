import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";

interface Meal {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;
  strSource: string;
  strImageSource: string;
  strCreativeCommonsConfirmed: string;
  dateModified: string;
}

function Meals() {
  const router = useRouter();
  const { id } = router.query;

  const [meal, setMeal] = useState<Meal>({} as Meal);

  useEffect(() => {
    const getMeal = async () => {
      const { data } = await axios.get(`/api/meals?id=${id}`);
      setMeal(data);
    };
    getMeal();
  }, [id]);

  // Change Youtube URL to embed URL
  const embedUrl = meal?.strYoutube?.replace("watch?v=", "embed/");

  return (
    <>
      <Navbar />
      <main>
        <div className="px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">{meal?.strMeal}</h1>
          <hr className="my-2" />
          <div className="flex flex-col md:flex-row md:gap-4">
            <div className="flex flex-col md:w-1/2">
              <figure className="md:max-w-md mx-auto">
                <Image
                  className="rounded-lg"
                  src={meal?.strMealThumb}
                  alt={meal?.strMeal}
                  width={500}
                  height={500}
                />
              </figure>
              <div className="flex flex-wrap gap-2 mt-2">
                <p className="font-bold">Country:</p>
                <p>{meal?.strArea}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <p className="font-bold">Category:</p>
                <p>{meal?.strCategory}</p>
              </div>
              {meal?.strTags && (
                <div className="flex flex-wrap gap-2">
                  <p className="font-bold">Tags:</p>
                  <p>{meal?.strTags}</p>
                </div>
              )}
            </div>
            <div className="flex-1 text-justify">
              <div>
                <p className="font-bold text-2xl">Instructions</p>
                <p>{meal?.strInstructions}</p>
                <div>
                  <p className="font-bold text-2xl">Recipes</p>
                  <div>
                    <div>
                      <ul className="list-item">
                        <li>
                          <p>
                            {meal?.strMeasure1} {meal?.strIngredient1}
                          </p>
                        </li>
                        <li>
                          <p>
                            {meal?.strMeasure2} {meal?.strIngredient2}
                          </p>
                        </li>
                        <li>
                          <p>
                            {meal?.strMeasure3} {meal?.strIngredient3}
                          </p>
                        </li>
                        <li>
                          <p>
                            {meal?.strMeasure4} {meal?.strIngredient4}
                          </p>
                        </li>
                        <li>
                          <p>
                            {meal?.strMeasure5} {meal?.strIngredient5}
                          </p>
                        </li>
                        <li>
                          <p>
                            {meal?.strMeasure6} {meal?.strIngredient6}
                          </p>
                        </li>
                        <li>
                          <p>
                            {meal?.strMeasure7} {meal?.strIngredient7}
                          </p>
                        </li>
                        <li>
                          <p>
                            {meal?.strMeasure8} {meal?.strIngredient8}
                          </p>
                        </li>
                        <li>
                          <p>
                            {meal?.strMeasure9} {meal?.strIngredient9}
                          </p>
                        </li>
                        <li>
                          <p>
                            {meal?.strMeasure10} {meal?.strIngredient10}
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="list-item">
                        <li>
                          <p>
                            {meal?.strMeasure11} {meal?.strIngredient11}
                          </p>
                        </li>
                        <li>
                          <p>
                            {meal?.strMeasure12} {meal?.strIngredient12}
                          </p>
                        </li>
                        <li>
                          <p>
                            {meal?.strMeasure13} {meal?.strIngredient13}
                          </p>
                        </li>
                        <li>
                          <p>
                            {meal?.strMeasure14} {meal?.strIngredient14}
                          </p>
                        </li>
                        <li>
                          <p>
                            {meal?.strMeasure15} {meal?.strIngredient15}
                          </p>
                        </li>
                        <li>
                          <p>
                            {meal?.strMeasure16} {meal?.strIngredient16}
                          </p>
                        </li>
                        <li>
                          <p>
                            {meal?.strMeasure17} {meal?.strIngredient17}
                          </p>
                        </li>
                        <li>
                          <p>
                            {meal?.strMeasure18} {meal?.strIngredient18}
                          </p>
                        </li>
                        <li>
                          <p>
                            {meal?.strMeasure19} {meal?.strIngredient19}
                          </p>
                        </li>
                        <li>
                          <p>
                            {meal?.strMeasure20} {meal?.strIngredient20}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-2" />
          <div className="text-center">
            <p className="font-bold text-2xl mb-4">Video Tutorial</p>
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={embedUrl}
                title={meal?.strMeal}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Meals;
