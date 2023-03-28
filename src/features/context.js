import React, { useEffect, useState, useContext, useReducer } from "react";

import cartItems from "../data";

import reducer from "../reducers/reducer";

const AppContext = React.createContext();

const initialState = {
  Cart: cartItems,
  totalQuantity: 0,
  totalPrice: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearItems = () => {
    dispatch({ type: "CLEAR_ITEMS" });
  };

  const removeItem = () => {
    dispatch({ type: "REMOVE_ITEM", payload: "id" });
  };

  return (
    <AppContext.Provider value={{ ...state, clearItems, removeItem }}>
      {children}
    </AppContext.Provider>
  );
};

// export global value
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
