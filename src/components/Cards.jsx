export const LandingPageCard = ({ image, name, desc }) => {
  return (
    <div className="flex flex-col items-center my-8 gap-2">
      <div>
        <img
          src={image}
          alt="stir-fry-pasta"
          className="max-w-[250px] h-[auto]"
        />
      </div>
      <div className="font-bold text-[1.5rem] text-[#ffcc1d]">{name}</div>
      <div className="text-center font-normal text-lg max-w-[20rem]">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export const FoodCard = ({ image, name, desc, price }) => {
  return (
    <div className="border rounded-lg">
      <div className="flex flex-col items-center mt-4 gap-3 flex-wrap w-[15rem] h-[19rem] p-4 relative">
        <div className="w-[5.6rem] h-[5.6rem] bg-slate-400 rounded-full">
          <img src={image} alt="" />
        </div>
        <div className="font-semibold text-lg">{name}</div>
        <div className="text-xs text-black">
          {desc}
        </div>
        <div className="flex justify-around items-center w-full absolute bottom-0 ">
          <p className="font-bold text-sm text-[#00302e]">{price}</p>
          <div className="p-4 font-medium text-sm text-[#06e775]">
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  );
};
