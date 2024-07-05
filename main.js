import "./style.css";
import App from "./webgl/App";
import Html from "./src/html.js";

document.addEventListener("DOMContentLoaded", () => {
  // html entry
  new Html();

  // webgl entry
  new App();
});
