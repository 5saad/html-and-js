'use strict'

const button = document.getElementById('button');


let pressed = () => button.innerHTML = 'i have been clicked';

button.onclick = () => pressed();