import Body from "./body";
import Footer from "./footer";

let html = null;

export default class Html {
  constructor() {
    if (html) {
      return html;
    }
    html = this;

    this.body = new Body();
    this.footer = new Footer();

    this.start();

  }

  start()
  {
      // any start logic in here
  }

}
