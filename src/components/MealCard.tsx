import React from "react";
import Image from "next/image";
import { Meals } from "@/types";
import Link from "next/link";

function MealCard({ props }: { props: Meals }) {
  return (
    <div className="card bg-base-200 shadow-xl">
      <figure className="pt-10 px-10">
        <Image
          className="overflow-hidden rounded-xl"
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
          <Link href={`/meal/${props.idMeal}`} key={props.idMeal}>
            <button className="btn btn-primary hover:btn-secondary">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MealCard;
