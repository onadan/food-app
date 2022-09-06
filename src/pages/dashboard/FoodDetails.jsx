import React from "react";
import { useParams, Link } from "react-router-dom";
import {special} from '../../data/data.js'

const FoodDetails = () => {

  const {foodId} = useParams();

  const food = special[foodId];

  // console.log(food)

  return (
    <div className="relative">
      <Link to="../../dashboard" className="hidden sm:block">
        <div className="bg-[#1b1b1bc4] h-screen w-screen"></div>
      </Link>

      <div className="sm:absolute sm:top-0 sm:right-0 sm:w-[30rem] bg-white min-h-screen w-screen">
        <div className="px-4 pt-4 flex flex-col items-center gap-5">
          <h1 className="font-bold text-3xl">Food Details for {foodId} </h1>
          <img src={food.image} alt="" className="max-w-[15rem]" />

          <Link to="../../dashboard">Go back</Link>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
