import React from "react";
import CartItem from "./CartItem";

// import global context
import { useGlobalContext } from "../features/context";

const CartContainer = () => {
  // object desetchering
  const { Cart, totalPrice } = useGlobalContext();

  // create empty array msg in empty items
  if (Cart.length === 0) {
    return (
      <section className="w-100 h-100vh flex  justify-center">
        {/* header */}
        <header className="mt-20">
          <h2 className="text-4xl font-bold text-red-700 pl-2 uppercase">
            your bag
          </h2>
          <h4 className="text-2xl">is currently empty</h4>
        </header>
      </section>
    );
  }

  // cart items include
  return (
    <section className="m-10">
      <header>
        <h2 className="text-center pt-1 uppercase font-bold text-orange-800">
          your bag
        </h2>
      </header>
      <div className="py-10">
        {/* using map method  */}
        {Cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>

      {/* footer */}
      <footer>
        <hr className="border-blue-900" />
        <div className="">
          <h3 className="flex pt-3 justify-between font-bold">
            total <span className="">${totalPrice}</span>
          </h3>
        </div>
        <button className="px-20 py-1  ml-44 text-bold text-2xl  text-red-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 ">
          Clear Cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
