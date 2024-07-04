import Html from "./html";

export default class Header {
  constructor() {
    this.html = new Html();

    //cache
    this.instance = document.querySelector("#header");

    this.start();
  }

  start() {
    this.instance.innerHTML = `
        <div>
        </div>`;
  }
}
