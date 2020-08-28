export default (state, action) => {
  switch (action.type) {
    case "DELETE":
      return {
        ...state,
        cart: state.cart.filter((animal) => animal.id !== action.payload),
      };

    case "ADD":
      return {
        ...state,
        cart: [action.payload, ...state.cart],
      };
    default:
      return state;
  }
};
