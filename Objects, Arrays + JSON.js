// let car = new Object();
// car["make"] = "Audi";
// car["model"] = "A5";
// car["carReg"] = "W8M8";

// console.log(car) // shows all attributes
// console.log(car.make); //show the value of make
// console.log(car.model); //show the value of model
// console.log(car.carReg); //show the value of carReg

// //The object can have new properties added at any time. Known as an expando property.

// car.numberOfDoors = 4;
// console.log(car.numberOfDoors); //Shows the value referring to number of doors.

// // let car = { make: "Audi", model: "A5", carReg: "W8M8" };
// let carPark = [
//     { make: "Audi", model: "A5", carReg: "AB12CDE" },
//     { make: "hyundai", model: "i30", carReg: "AB11CDE" }
// ]

// for (let i = 0; i < carPark.length; i++) {
//     for (let key in carPark[i]) {
//         console.log(`${key} : ${carPark[i][key]}`);
//     }
// }


// //Arrays

// let a = Array(); // an empty array called a
// let b = Array(10); //array containing 10 empty spaces called b
// let c = Array("Tom","Dick","Harry"); // array containing 3 elements called c
// // short hand for creating arrays
// let cShortHand = ["Tom","Dick","Harry"]; //shorthand using [] around each elment and seperated by a comma.
// let d = [1,2,3,4,5];

// let classRoom = ["","","",""];
// classRoom[0] = "John";
// classRoom[3] = "Simran";

// console.log(classRoom[0]); // will return John
// console.log(classRoom[2]); // will return undefined
// console.log(classRoom[3]); // will return Simran.

// //Arrray methods
// let f =["apple","strawberries","banana", "grapes", "pear"];

// console.log(f); // ["apple", "strawberries", "banana", "grapes", "pear"]
// console.log(f.sort()); // ["apple", "banana", "grapes", "pear", "strawberries"]
// console.log(f.reverse());//["strawberries", "pear", "grapes", "banana", "apple"]
// console.log(f.join()); //strawberries,pear,grapes,banana,apple

// e = f.join("-");
// console.log(e);// strawberries-pear-grapes-banana-apple

// console.log(f.push("lemon"));
// console.log(f);//["strawberries", "pear", "grapes", "banana", "apple", "lemon"]
// console.log(f.pop());
// console.log(f);//["strawberries", "pear", "grapes", "banana", "apple"]

// console.log(f.unshift("kiwi"));
//     console.log(f); //["kiwi", "strawberries", "pear", "grapes", "banana", "apple"]
//     console.log(f.shift());
//     console.log(f); //["strawberries", "pear", "grapes", "banana", "apple"]

//Exercise 1
// let darthVader = {allegiance:"empire", weapon:"lightsabre",sith:true};
// console.log(darthVader);
// console.log("Darth Vaders allegiance is to the", darthVader.allegiance);
// console.log("Darth Vaders weapon of choice is a", darthVader.weapon);
// console.log("Darth Vader is a sith", darthVader.sith);
// console.log("Darth Vader is a jedi", darthVader.sith==="jedi");

//Excerise 3
let myArray=["hello","everyone"];
console.log(myArray.length);
myArray.push("goodbye");
console.log(myArray.length);
myArray.shift();

for (let i=0; i<myArray.length;i++){
    console.log(myArray[i]);
}
//or

for(let eachElement of myArray) {
    console.log(eachElement);
}