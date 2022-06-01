'use strict'

// get objects from DOM
const para = document.getElementById("paragraph");
const url = document.getElementById("url");
const button = document.getElementById("butt");

// Write a READ methods to read data from an API

// C R U D -> CREATE READ UPDATE DELETE

let read_old = (URL) => {
    console.log(URL);
    fetch(URL)
        .then( response => {
            if (response.status !== 200) {
                console.error(response.status);
                return;
            }
            response.json()
                .then( data => {
                    para.innerHTML = JSON.stringify(data);
                })
        }).catch( err => {
            console.log(err);
        });

}


//AXIOS

let read = URL => {
    axios
        .get(URL)
        .then( response => {
            para.innerHTML = JSON.stringify(response.data);
        }).catch(err => {
            console.error(err);
        })
}

let create = URL => {
    axios
        .post(URL, {
            first_name : "Cameron",
            email : "cguthrie@qa.com"
        })
        .then( response => {
            para.innerHTML = JSON.stringify(response);
        }).catch(err =>{
            console.error(err);
        })
}

// when button is clicked send text from input to function
button.onclick = () => read(url.value);

/*
	https://catfact.ninja/fact
	https://www.boredapi.com/api/activity
	http://api.open-notify.org/iss-now.json // ISS POSITION
	https://catfact.ninja/fact // No. OF PEOPLE IN SPACE
  https://emojihub.herokuapp.com/api/random // Random emoji
*/

// https://reqres.in/api/users