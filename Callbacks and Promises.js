let times10 = (num1) => {
    newNum = num1*10;
    alert(`${num1} x 10 = ${newNum}`)
}

let userInput = (callback) => {
    let num1 = prompt('Please enter a number');
    callback(num1);
}

userInput(times10);