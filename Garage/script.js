'use strict'

// get objects from DOM
const para = document.getElementById("paragraph");
const button = document.getElementById("butt");

// Write a READ methods to read data from an API

// C R U D -> CREATE READ UPDATE DELETE
//AXIOS

let read = () => {
    axios
        .get('http://localhost:8080/car/readAll')
        .then( response => {
            para.innerHTML = JSON.stringify(response.data);
        }).catch(err => {
            console.error(err);
        })
}



button.onclick = () => read();