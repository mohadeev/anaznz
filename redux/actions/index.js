import TYPES from "../types/index";

export const Index = (data) => {
  return {
    type: "SHOW_THE_TOUR",
    payload: data,
  };
};