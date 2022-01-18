var str =prompt("enter a string")

var len=str.length;

msg="string is palindrome "
//        0      3
for(var i=0; i < len/2; i++)
{
  if (str[i] !==str[len-1-i]) 
  {
      msg="not palindrome"
  }  
}
console.log(msg);