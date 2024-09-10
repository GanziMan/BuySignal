import { parseRequestUrl } from "./utils.js";
import ProductScreen from "./screens/ProductScreen.js";
import HomeScreen from "./screens/HomeScreen.js";
import Error404Screen from "./screens/Error404Screen.js";

const routes = {
  "/": HomeScreen,
  "/product/:id": ProductScreen,
};

const router = () => {
  const request = parseRequestUrl();
  const parseUrl =
    (request.resource ? `/${request.resource}` : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? `/${request.verb}` : "");

  const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
  const mainContainer = document.getElementById("main-container");
  mainContainer.innerHTML = HomeScreen.render();
};

window.addEventListener("load", router);

window.addEventListener("hashchange", router);