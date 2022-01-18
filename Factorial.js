let number=parseInt(prompt("enter a number"))
if(number < 0){
    console.log("enter a +ve integer");

}else if(number ===0){
    console.log(`${number} factorial is 1`);
}
else{
    let fact=1;
    for(let i=1;i<=number;i++)
    {
         fact*=i;
    

    }
console.log(fact);
}