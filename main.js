import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
<body>
  <h1><em>Welcome to Otama Free Online Games</em></h1>
  <div>
  <iframe frameborder="0" src="https://itch.io/embed-upload/10627049?color=333333" allowfullscreen="" width="500" height="420"><a href="https://otama-studiosports.itch.io/otama-looks-at-the-mouse">Play Otama looks at the mouse on itch.io</a></iframe>
  </div>
  <div>
    <h1>Play with Otama ↑</h2>
        <h2>Scroll down to view the games!</h2>

    <p><strong>Welcome to otama's free online games! <br>Here you'll find a collection of games I have made myself, hopefully they are getting better with every release. <br>I am slowly making new games, I am mostly focusing on small scale arcade games.<br> If you're interested in putting some of these on your website, head down to the bottom and go to the info page.<br> </strong>
<h2>Enjoy the games!</h2>


</p>
     <h1>Games Menu:</h1>
  </div>
  <div>


  
  </div>



  <div>
    <h2 class="trigger" data-target="iframe1">Pacman 3D</h2>
    <div id="iframe1" class="iframe-container">
<iframe frameborder="0" src="https://itch.io/embed-upload/10658301?color=333333" allowfullscreen="" width="980" height="688"><a href="https://otama-studios.itch.io/pacman3d-updated-version">Play Pacman 3d (updated version) on itch.io</a></iframe>    </div>
</div>

<div>
    <h2 class="trigger" data-target="iframe2">Wack-A-Pac</h2>
    <div id="iframe2" class="iframe-container">
      <iframe frameborder="0" src="https://itch.io/embed-upload/10641495?color=333333" allowfullscreen="" width="640" height="460"><a href="https://otama-studiosports.itch.io/wack-a-pac">Play Wack-A-Pac on itch.io</a></iframe>
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