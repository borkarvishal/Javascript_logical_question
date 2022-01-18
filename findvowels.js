const vowels=['a','e','i','o','u'];

const words=prompt("enter a string")
 let count=0;
for (let letter of words.toLowerCase()) {
    if (vowels.includes(letter)) {
        count++;
    }
    
}
console.log(count);

