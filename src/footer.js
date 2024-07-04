import Html from "./html";

export default class Footer {
  constructor() {
    this.html = new Html();

    //cache
    this.instance = document.querySelector("#footer");

    this.start();
  }

  start() {
    this.instance.innerHTML = `
    <div>
       
    </div>`;
  }
}
