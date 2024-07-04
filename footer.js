import Html from "./html";

export default class Footer {
  constructor() {
    this.html = new Html();

    //cache
    this.footer = document.querySelector("#footer");

    this.start();
  }

  start() {
    this.footer.innerHTML = `
    <div>
       
    </div>`;
  }
}
