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
      <div className="flex flex-col items-center my-4 gap-4 flex-wrap w-[20rem] p-4">
        <div className="w-[5.6rem] h-[5.6rem] bg-slate-400 rounded-full">
          <img src={image} alt="" />
        </div>
        <div className="font-semibold text-lg">{name}</div>
        <div className="text-xl text-black max-h-14 text-ellipsis overflow-hidden">
          {desc}
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="font-bold text-sm text-[#00302e]">{price}</p>
          <div className="p-4 font-medium text-sm bg-[#00302e] text-[#06e775]">
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  );
};
