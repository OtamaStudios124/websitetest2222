import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
<body>
  <h1>Welcome to Otama Free Online Games</h1>
  <div>
  <iframe frameborder="0" src="https://itch.io/embed-upload/10627049?color=333333" allowfullscreen="" width="500" height="420"><a href="https://otama-studiosports.itch.io/otama-looks-at-the-mouse">Play Otama looks at the mouse on itch.io</a></iframe>
  </div>
  <div>
    <h2>Play with Otama ↑</h2>
    <h3>Scroll down to view the games!</h3>
     <h1>Games Menu:</h1>
  </div>
  <div>
    <h2>Pacman 3D</h2>
    <iframe frameborder="0" src="https://itch.io/embed-upload/10658301?color=333333" allowfullscreen="" width="980" height="688"><a href="https://otama-studios.itch.io/pacman3d-updated-version">Play Pacman 3d (updated version) on itch.io</a></iframe>
  </div>
</body>

    
`;

