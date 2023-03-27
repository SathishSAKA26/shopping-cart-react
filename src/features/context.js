import React, { useEffect, useState, useContext, useReducer } from "react";

import cartItems from "../data";

import reducer from "../reducers/reducer";

const AppContext = React.createContext();

const initialState = {
  cartItems: cartItems,
  totalQuantity: 0,
  totalPrice: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

// export global value
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
