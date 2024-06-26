import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
<body>
  <h1><em>Welcome to Otama Free Online Games</em></h1>
  <div id="iframe3" class="iframe-container">
    <iframe frameborder="0" src="https://itch.io/embed-upload/10627049?color=333333" allowfullscreen="" width="500" height="420"><a href="https://otama-studiosports.itch.io/otama-looks-at-the-mouse">Play Otama looks at the mouse on itch.io</a></iframe>
  </div>
  <div>
    <h1>Play with Otama ↑</h2>
        <h2>Scroll down to view the games!</h2>

    <p><strong>Welcome to otama's free online games! <br>Here you'll find a collection of games I have made myself, hopefully they are getting better with every release. <br>I am slowly making new games, I am mostly focusing on small scale arcade games.<br> If you're interested in putting some of these on your website, head down to the bottom and go to the info page.<br> </strong>
<h2 class="trigger" data-target="iframe3">Enjoy the games!</h2>


</p>
     <h1>Games Menu:</h1>
  </div>
  <div>

</>
    <h2>3D Games: Pacman 3D, Frogs, Roller 3D, Snake 3D, Snake 1st Person, Crazy Mazy</h2>
    <h2>2D Games:Wack-A-Pac, Pac-Catch, Space Invaders, Ms Pacman, Sukoban, Frogger</h2>
  </div>



  <div>
    <p class="trigger" data-target="iframe1">Click to reveal iframe 1</p>
    <div id="iframe1" class="iframe-container">
        <iframe src="https://example.com/" width="500" height="300"></iframe>
    </div>
</div>

<div>
    <p class="trigger" data-target="iframe2">Click to reveal iframe 2</p>
    <div id="iframe2" class="iframe-container">
        <iframe src="https://example.org/" width="500" height="300"></iframe>
    </div>
</div>


</body>

    
`;


document.addEventListener('click', function(event) {
  if (event.target.classList.contains('trigger')) {
      const targetId = event.target.getAttribute('data-target');
      const allIframes = document.querySelectorAll('.iframe-container');

      allIframes.forEach(iframe => {
          iframe.classList.remove('active');
      });

      const targetIframe = document.getElementById(targetId);
      targetIframe.classList.add('active');
  }
});