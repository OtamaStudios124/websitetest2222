import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1><iframe frameborder="0" src="https://itch.io/embed-upload/10618791?color=333333" allowfullscreen="" width="640" height="460"><a href="https://otama-studiosports.itch.io/cat-and-mouse">Play Cat And Mouse on itch.io</a></iframe></h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
