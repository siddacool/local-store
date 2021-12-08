import { mainLocalStorage } from ".";
import { useStorage } from "../helpers/store";

export const cart = useStorage(mainLocalStorage, "cart", {});
export const updateCart = () => {
  let number = cart.get("number") ? cart.get("number") : 1;
  number = number + 1;

  cart.set({ number });
};
