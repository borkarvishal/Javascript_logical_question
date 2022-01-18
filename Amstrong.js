let sum=0;
let num=parseInt(prompt("enter a number"))
let temp=num;
while (temp>0) {
    let reminder = temp % 10;
    sum=reminder*reminder*reminder;
    temp=parseInt(temp/10);

}
if (sum=num) {
    console.log("number is amstrong");
    
} else {
    console.log("not a amstrong");
}