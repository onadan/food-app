import React from "react";
import { useParams } from "react-router-dom";

const FoodDetails = () => {
  const { food } = useParams();
  return <div>FoodDetails for {food} </div>;
};

export default FoodDetails;
