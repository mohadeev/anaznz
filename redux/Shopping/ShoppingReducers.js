 import * as t from  "./ShoppingTypes";
const ShoppingReducers = (
  state = {
    name: "guest",
  },
  action
) => {
  switch (action.type) {
    case "hhh":
      return {
        ...state,
        name: action.payload,
      };
    default:
      return { ...state };
  }
};
export default ShoppingReducers;
