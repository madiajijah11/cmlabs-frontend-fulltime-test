import React from "react";
import Image from "next/image";

interface Meals {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

function MealCard({ props }: { props: Meals }) {
  return (
    <div className="card bg-base-200 shadow-xl image-full">
      <figure className="relative">
        <Image
          className="object-cover overflow-hidden"
          src={props.strMealThumb}
          alt={props.strMeal}
          width={300}
          height={300}
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold">{props.strMeal}</h2>
        <p> </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default MealCard;
