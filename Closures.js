//excersise 1
let multi = (num1) => {
    return (num2) => {
        return num1*num2;
    };
}

// let multi2 = multi(2);
// console.log(multi2(20));
// let multi5 = multi(5);
// console.log(multi5(5));
// let multi10 = multi(10);
// console.log(multi10(50));

//exercise 2

let person = () => {
    let name = "Bill";
    return {
        getName: function() {
            return name;
        },
        setName: function(newName) {
            name = newName;
        },
    };
}

// let john = person();
// let returnedName = john.getName();
// console.log(returnedName);
// john.setName("John");
// returnedName= john.getName();
// console.log(returnedName);

//exercise 3
