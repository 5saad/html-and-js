const email = document.getElementById('email');
const fname = document.getElementById('firstname');
const lname = document.getElementById('lastname');
const submit = document.getElementById('submit');



let read = () => {
    fetch(`https://reqres.in/api/users/1`) // 1
    .then((response) => {
        if (response.status !== 200) {  //  2
            console.error(`status: ${reponse.status}`);
            return;
        }
        response.json() // 3
        .then(data => console.info(data)) // 4
    }).catch((err)=> console.error(`${err}`)); // 5
}




let submitDeets = () => {
    fetch ('https://reqres.in/api/users/1', {
    method: 'post',
    headers: {
        'Content-type': 'application/json'
    },

    body: JSON.stringify(
        {
            email: `${email.value}`,
            first_name: `${fname.value}`,
            last_name: `${lname.value}`
        }
        )
})
.then(res => res.json())
.then((data) => console.log(`Request succeeded with JSON response ${data}`))
.catch((error) => console.log(`Request failed ${error}`))
}

submit.onclick=() => submitDeets();
