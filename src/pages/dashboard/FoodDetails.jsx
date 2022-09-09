import React from "react";
import { useParams, Link } from "react-router-dom";
import { special } from "../../data/data.js";

const FoodDetails = () => {
  const { foodId } = useParams();

  const food = special[foodId];

  // console.log(food)

  return (
    <div className="relative ease-in-out delay-1000 transition-all overflow-hidden">
      <Link to="../../dashboard" className="hidden sm:block">
        <div className="bg-[#1b1b1bc4] h-screen w-screen"></div>
      </Link>

      <div className="sm:absolute sm:top-0 sm:right-0 sm:w-[30rem] bg-white min-h-screen w-screen overflow-scroll">

        <div className="px-4 pt-4 flex flex-col items-center w-5/6 mx-auto">
          <img src={food.image} alt="" className="max-w-[15rem] my-5" />
          <p className="font-semibold text-lg text-[#00302e] my-3 ">{food.name}</p>
          <p className="leading-9 text-sm text-center mb-10">{food.desc}</p>

          <div className="flex justify-between w-full text-[#00302e] font-bold">
            <p>{food.price}</p>
            <p>10 - 20 mins</p>
            <p>10 Pcs Avail</p>
          </div>

          <div className="flex justify-between w-full items-center my-7">
            <div className="flex items-center">
              <button className="bg-[#F3C294] w-[3rem] h-[4rem] font-bold text-[#00302e] text-3xl">-</button>
              <p className="p-4">1</p>
              <button className="bg-[#F3C294] w-[3rem] h-[4rem] font-bold text-[#00302e] text-3xl">+</button>
            </div>

            <div>
              <button className="bg-[#00302e] text-white p-4 font-medium">Add to Cart</button>
            </div>

          </div>

          <Link to="../../dashboard" className="font-bold">Go back</Link>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
