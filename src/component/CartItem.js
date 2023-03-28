import React from "react";

const CartItem = ({ id, image, title, price, amount }) => {
  return (
    <article className="flex justify-between">
      <img src={image} alt={title} className="w-32 mb-12 rounded-md" />
      <div className="w-64 text-start">
        <h3 className="font-bold">{title}</h3>
        <p className="text-green-800 font-bold text-2xl">${price}</p>
        {/* add remove button */}
        <button className="text-red-700 cursor-pointer font-bold uppercase">
          remove
        </button>
      </div>
      {/* add and delete button */}
      <div className="w-100 bg-white">
        {/* increase items */}
        <button className="">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            ></path>
          </svg>
        </button>
        {/* amount */}
        <p className="">{amount}</p>
        {/* decrease amount */}
        <button className="">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            ></path>
          </svg>
        </button>
      </div>
    </article>
  );
};

export default CartItem;
