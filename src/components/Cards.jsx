import { Link } from "react-router-dom";

export const LandingPageCard = ({ image, name, desc }) => {
  return (
    <div className="flex flex-col items-center mb-8">
        <img
          src={image}
          alt="stir-fry-pasta"
          className="w-4/5 max-w-[15rem]"
        />
      <div className="my-4 font-bold text-2xl text-[#ffcc1d]">{name}</div>
      <div className="text-center font-normal text-md max-w-[20rem]">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export const FoodCard = ({ id, image, name, desc, price }) => {
  return (
    <div className="border rounded-lg">
      <div className="flex flex-col items-center mt-4 gap-3 flex-wrap min-w-[15rem] min-h-[19rem] p-4 relative">
        <div className="w-[5.6rem] h-[5.6rem] bg-slate-400 rounded-full">
          <img src={image} alt="" />
        </div>
        <div className="font-semibold text-lg">{name}</div>
        <div className="text-xs text-black max-w-[20rem] p-4">{desc}</div>
        <div className="flex justify-around items-center w-full absolute bottom-0 max-w-[20rem]">
          <p className="font-bold text-sm text-[#00302e]">{price}</p>
          <Link to={`./details/${id}`}>
            <div className="p-4 font-medium text-sm text-[#06e775]">
              Add to Cart
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
