import { createBox } from './modules/create-box.js'

window.onload = (event) => {

    // elements
    const app = document.getElementById('app')
    const btnCreateBox = document.getElementById('btnCreateBox')

    // events
    btnCreateBox.addEventListener('click', () => { app.appendChild(createBox()) })

    // create some boxes in load
    for (let i = 0; i < 10; i++) {
        app.appendChild( createBox() )
    }

}
