import React from "react";

const CartTable = () => {
  return (
    <div>
      <table className="font-light text-sm w-full">
        <thead>
          <th className="float-left">Item</th>
          <th>Qty</th>
          <th>Unit Price</th>
          <th>Sub-total</th>
        </thead>
        <tbody className="text-[#00302E]">
          <tr>
            <td>
              <div className="flex">
                <div className="w-[50px] h-[50px] bg-slate-500 mr-3 rounded-full"></div>
                <div className="font-bold text-[#00302E]">
                  <p>Stir Fry Pasta</p>
                  <p className="text-red-700">Remove</p>
                </div>
              </div>
            </td>
            <td className="px-8 font-bold">3</td>
            <td className="px-2 font-bold">N1000</td>
            <td className="px-2 font-bold">N3000</td>
          </tr>
        </tbody>
      </table>
      <div>
        <button
          className="font-[500] w-full cursor bg-[#00302e] text-white p-3 px-4 rounded-lg mx-2  my-4"
          
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartTable;
