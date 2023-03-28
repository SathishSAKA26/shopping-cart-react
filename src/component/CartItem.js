import React from "react";

import { useGlobalContext } from "../features/context";

const CartItem = ({ id, image, title, price, amount }) => {
  const { removeItem } = useGlobalContext();
  return (
    <article className="flex justify-between">
      <img src={image} alt={title} className="w-32 mb-12 rounded-md" />
      <div className="w-64 text-start">
        <h3 className="font-bold">{title}</h3>
        <p className="text-green-800 font-bold text-2xl">${price}</p>
        {/* add remove button */}
        <button
          className="text-red-700 cursor-pointer font-bold uppercase"
          onClick={() => removeItem(id)}
        >
          remove
        </button>
      </div>
      {/* add and delete button */}
      <div className="w-1">
        {/* increase items */}
        <button className="cursor-pointer text-black">
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Arrow / Chevron_Up_Duo">
              <path
                id="Vector"
                d="M8 17L12 13L16 17M8 11L12 7L16 11"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </button>
        {/* amount */}
        <p className="text-2xl font-bold pl-3 pt-2">{amount}</p>
        {/* decrease amount */}
        <button className="">
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Arrow / Chevron_Down_Duo">
              <path
                id="Vector"
                d="M16 13L12 17L8 13M16 7L12 11L8 7"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </button>
      </div>
    </article>
  );
};

export default CartItem;
