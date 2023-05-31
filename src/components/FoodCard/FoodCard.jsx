import React from "react";
import Button from "../Button/Button";

const FoodCard = ({item}) => {
    const {image, name, recipe} = item
    console.log(item)
  return (
    <div>
      <div className="bg-base-200 rounded-none ">
        <img className="w-full" src={image} alt="Menu" />
        <div className="card-body p-3 items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p className=" h-[70px]">{recipe}</p>
          <Button>Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
