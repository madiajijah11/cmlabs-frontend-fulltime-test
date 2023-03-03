import React from "react";
import { Ingredient } from "@/types";
import { BiFoodMenu } from "react-icons/bi";
import { IoFastFoodOutline } from "react-icons/io5";

function IngredientCard({ props }: { props: Ingredient }) {
  return (
    <div className="card-compact shadow-xl bg-base-200 hover:bg-primary cursor-pointer">
      <div className="card-body items-center text-center">
        <div className="card-title text-center">
          <BiFoodMenu /> {props.strIngredient} <IoFastFoodOutline />
        </div>
      </div>
    </div>
  );
}

export default IngredientCard;
