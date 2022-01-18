// const num =parseInt(prompt("enter a number"));
// let isPrime=true;
// if(num==1){
//     console.log(`${num} is not prime number`);

// }
// else if(num>1){
//     for(let i=2;i<num;i++){
//         if(num % i==0){
//             isPrime=false;
//                 break
//         }
//     }
//     if (isPrime) {
//         console.log(`${num} is  prime`);
        
//     } else {
//         console.log(`${num} is not  prime`);
//     }

// }
// else{
//     console.log(`${num} is not prime number`);
// }

let lower=parseInt(prompt("enter a lower number"));
let higest=parseInt(prompt("enter a higher number"));
for(let i = lower; i <= higest; i++){

    let flag=0;

    for(let j=2; j<i; j++)
    {
        if (i % j == 0) {
            flag=1;
            break;
            
        }

       
    }
    if (i>1 && flag == 0) {
        console.log(i);
         
     }

}

// program to print prime numbers between the two numbers

// take input from the user
// const lowerNumber = parseInt(prompt('Enter lower number: '));
// const higherNumber = parseInt(prompt('Enter higher number: '));

// console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// // looping from lowerNumber to higherNumber
// for (let i = lowerNumber; i <= higherNumber; i++) {
//     let flag = 0;

//     // looping through 2 to user input number
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = 1;
//             break;
//         }
//     }

//     // if number greater than 1 and not divisible by other numbers
//     if (i > 1 && flag == 0) {
//         console.log(i);
//     }
// }
