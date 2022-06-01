function subtract(num1, num2){
    return num1-num2;
}
console.log(subtract(10,5));

let welcome = (name, age, gender) => console.log(`My name is ${name}, I am ${age} years old and my gender is ${gender}`);

welcome("John",53,"male");

let powerUp = (n1,n2) => console.log(n1**n2); //or use Math.pow(n1,n2)

powerUp(3,3);