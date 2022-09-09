import React from "react";
import { useParams, Link } from "react-router-dom";
import { special } from "../../data/data.js";

const FoodDetails = () => {
  const { foodId } = useParams();

  const food = special[foodId];

  return (
    <div className="relative overflow-hidden">
      <Link to="../../dashboard" className="hidden sm:block">
        <div className="bg-[#1b1b1bc4] h-screen w-screen"></div>
      </Link>

      <div className="sm:absolute sm:top-0 sm:right-0 sm:w-[30rem] bg-white h-screen w-screen overflow-y-scroll">
        <div className="px-4 pt-4 flex flex-col items-center w-5/6 mx-auto">
          <Link to="/dashboard" className="self-end font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Link>
          <img src={food.image} alt="" className="max-w-[15rem] my-5" />
          <p className="font-semibold text-lg text-[#00302e] my-3 ">
            {food.name}
          </p>
          <p className="leading-9 text-sm text-center mb-10">{food.desc}</p>

          <div className="flex justify-between w-full text-[#00302e] font-bold">
            <p>{food.price}</p>
            <p>10 - 20 mins</p>
            <p>10 Pcs Avail</p>
          </div>

          <div className="flex justify-between w-full items-center my-7">
            <div className="flex items-center">
              <button className="bg-[#F3C294] w-[3rem] h-[4rem] font-bold text-[#00302e] text-3xl">
                -
              </button>
              <p className="p-4">1</p>
              <button className="bg-[#F3C294] w-[3rem] h-[4rem] font-bold text-[#00302e] text-3xl">
                +
              </button>
            </div>

            <div>
              <button className="bg-[#00302e] text-white p-4 font-medium">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
