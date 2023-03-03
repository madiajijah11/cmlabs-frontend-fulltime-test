import React from "react";
import { Ingredient } from "@/types";

function IngredientCard({ props }: { props: Ingredient }) {
  return (
    <div className="card shadow-xl bg-base-200 hover:bg-primary cursor-pointer">
      <div className="card-body items-center text-center">
        <div className="card-title text-center">{props.strIngredient}</div>
      </div>
    </div>
  );
}

export default IngredientCard;
