import { Link } from "react-router-dom";
import CartTable from "./CartTable";

const Cart = () => {
  const cart = true;

  return (
    <div className="relative overflow-hidden">
      <Link to="../../dashboard" className="hidden sm:block">
        <div className="bg-[#1b1b1bc4] h-screen w-screen"></div>
      </Link>

      <div className="sm:absolute sm:top-0 sm:right-0 sm:w-[30rem] bg-white h-screen w-screen overflow-y-scroll">
        <div className="px-4 pt-4">
          {/* <div className="text-red-500 p-3 rounded-full border border-red-300 flex justify-center"> X </div> */}
          <header>
            <h1 className="font-medium text-md mt-10 my-4 text-[#00302E]">
              Your Cart
            </h1>
          </header>

          {cart ? (
            <CartTable />
          ) : (
            <div>
              <div className="font-light text-sm mt-4"> No Item in cart </div>

              <Link to="../../dashboard">
                <button className="font-[500] w-full cursor bg-[#00302e] text-white p-3 px-4 rounded-lg mx-2  my-4">
                  Go back
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
