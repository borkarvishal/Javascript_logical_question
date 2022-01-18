const operator=prompt("enter a operator")

let a =prompt("enter a first number")

let b =prompt("enter a first number")
let result;
if (operator == '+')

{
result = a + b;
    
}
else if(operator == '-')
{
    result=a-b;
}
else{
    result=a*b;
}
console.log(result);