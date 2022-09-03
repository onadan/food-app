import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="relative">
      <Link to="../../dashboard">
        <div className="bg-[#8f8f8fa9] h-screen w-screen"></div>
      </Link>

      <div className="absolute top-0 right-0 w-[30rem] bg-white min-h-screen">
        Cart<Link to="../../dashboard">Go back</Link>
      </div>
    </div>
  );
};

export default Cart;
