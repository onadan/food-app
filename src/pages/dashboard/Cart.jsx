import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="relative overflow-hidden">
      <Link to="../../dashboard" className="hidden sm:block">
        <div className="bg-[#1b1b1bc4] h-screen w-screen"></div>
      </Link>

      <div className="sm:absolute sm:top-0 sm:right-0 sm:w-[30rem] bg-white h-screen w-screen overflow-y-scroll">
        <div className="px-4 pt-4 flex flex-col items-center w-5/6 mx-auto">
          <h1 className="font-bold text-3xl">Cart</h1>
          <Link to="../../dashboard">Go back</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
