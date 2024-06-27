import "./style.css";
import App from "./webgl/App";


document.querySelector("#app").innerHTML = `
<body>
    <h1><em>Welcome to Otama Free Online Games</em></h1>
    <div>
      <iframe frameborder="0" src="https://itch.io/embed-upload/10627049?color=333333" allowfullscreen="" width="450" height="360">
        <a href="https://otama-studiosports.itch.io/otama-looks-at-the-mouse">Play Otama looks at the mouse on itch.io
        </a>
      </iframe>
    </div>
    <div>
      <h1>Play with Otama ↑</h1>
      <h2>Scroll down to the bottom to view the games!</h2>

      <p><strong>Welcome to otama's free online games! <br>Here you'll find a collection of games I have made myself, hopefully they are getting better with every release. <br>I am slowly making new games, I am mostly focusing on small scale arcade games.<br> If you're interested in putting some of these on your website, head down to the bottom and go to the info page.<br> </strong></p>
      <h2 class="trigger" data-target="iframe3">Enjoy the games!</h2>
      <h1> Games Menu:</h1>
            <h3> Games Load Here ↓ scroll down for selection</h3>

      
    </div>

    <div id="iframe-container">
      <iframe frameborder="0" src="" "" width="980" height="688">
        <a</a>
      </iframe>
    </div>

    <div class="grid-container">
          <div class="grid-item">
            <h2 class="trigger" src-target="">3D Games</h2>
          </div>
          <div class="grid-item">
            <h2 class="trigger" src-target="">2D Games</h2>
          </div>
          <div class="grid-item">
            <h2 class="trigger" src-target="">2 Player Games</h2>
          </div>
          <div class="grid-item">
            <h2 class="trigger" src-target="https://itch.io/embed-upload/10658301?color=333333">Pacman 3D</h2>
          </div>
          <div class="grid-item">
            <h2 class="trigger" src-target="https://itch.io/embed-upload/10658301?color=333333">Wack-A-Pac</h2>
            
          </div>
          <div class="grid-item">
            <h2 class="trigger" src-target="https://itch.io/embed-upload/10618437?color=333333">Pong</h2>
          </div>
          <div class="grid-item">
            <h2 class="trigger" src-target="https://itch.io/embed-upload/10496669?color=333333">Frogs</h2>
          </div>
          <div class="grid-item">
            <h2 class="trigger" src-target="https://itch.io/embed-upload/10618482?color=333333">Space Invaders</h2>
          </div>
          <div class="grid-item">
            <h2 class="trigger" src-target=""></h2>
          </div>
          <div class="grid-item">
            <h2 class="trigger" src-target="https://itch.io/embed-upload/10649659?color=333333">Snake 3D</h2>
          </div>
    </div>
</body> 
`;

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("trigger")) {
    const src = event.target.getAttribute("src-target");
    const iframeContainer = document.getElementById("iframe-container");
    const iframe = iframeContainer.querySelector("iframe");
    iframe.src = src;
  }
});

const app = new App();
