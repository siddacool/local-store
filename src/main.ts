import { cart, updateCart } from "./store/cart";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

const getCartNumber = () => cart.get("number");

updateCart();

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
  ${getCartNumber()}
`;
