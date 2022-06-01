'use strict'

//switch case

for(let i=1; i<=100; i++){
    switch(true){
        case (i%3==0 && i%5!=0):
            console.log(`Fizz`);
            break;
        case (i%5==0 && i%3!=0):
            console.log(`Buzz`);
            break;
        case (i%5==0 && i%3==0):
        console.log(`FizzBuzz`);
            break;
    }
}

//Ternery if statement

// for(let i=1; i<=100; i++){
//     (i%3==0 && i%5!=0) ? console.log(`Fizz`): false;
//     (i%5==0 && i%3!=0) ? console.log(`Buzz`): false;
//     (i%5==0 && i%3==0) ? console.log(`FizzBuzz`): false;
// }


// If else statment

// for(let i=1; i<=100; i++){
//     if(i%3==0 && i%5!=0){
//         console.log(`Fizz`);
//     }else if(i%5==0 && i%3!=0){
//         console.log(`Buzz`)
//     }else if(i%5==0 && i%3==0){
//         console.log('FizzBuzz')
//     }
// }
