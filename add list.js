'use strict'

const para = document.getElementById("paragraph");

para.innerHTML = `<b>Hello</b> world!`;

// 

// get objects from our DOM
const list = document.getElementById("list");
const text = document.getElementById("words");
const button = document.getElementById("butt");

// create functionality to add text to list
let addToList = (str) => {
    let child = document.createElement(`li`);
    let text = document.createTextNode(str);
    child.appendChild(text)// = str;
    list.appendChild(child);
}

// when button is clicked send text from input to function
button.onclick = () => addToList(text.value);