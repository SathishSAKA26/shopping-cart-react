const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_ITEMS":
      return { ...state, cart: [] };
    case "REMOVE_ITEM":
      const id = action.payload;
      const remainingItems = state.cart.filter((item) => item.id !== id);
      return { ...state, cart: remainingItems };
    default:
      return { ...state };
  }
};

export default reducer;
