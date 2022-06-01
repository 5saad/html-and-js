class Person {
    constructor(name, gender, age, interests, bio, greeting){
        this._name = name;
        this._gender= gender;
        this._age=age;
        this._interests=interests;
        this._bio=bio;
        this._greeting=greeting;

    }

    hello(){
        console.log(`${this._greeting} my name is ${this._name} , I am ${this._age} years old and I like ${this._interests}. I am a ${this._bio}`);
    }

    age(){
        console.log(`I am ${this._age} years old`);
    }
}

// let john = new Person("John","male", 22, "surfing", "live, laugh, love","What's up");
// john.hello();
// john.age();

class Teacher extends Person {
    constructor(name, subject){
        super(name);
        this._subject=subject;
    }

    teaching(){
        console.log(`my name is ${this._name} and I teach ${this._subject}`);
    }
}

let prof = new Teacher( "Mr. Matt Hematics", "Advanced Maths")
prof.teaching();

