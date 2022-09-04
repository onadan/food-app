import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="relative">
      <Link to="../../dashboard">
        <div className="bg-[#C4C4C46B] h-screen w-screen"></div>
      </Link>

      <div className="absolute top-0 right-0 w-[30rem] bg-white min-h-screen">
        <h1 className="font-bold text-3xl">Cart</h1>
        <Link to="../../dashboard">Go back</Link>
      </div>
    </div>
  );
};

export default Cart;
