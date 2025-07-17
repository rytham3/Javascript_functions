/* 

- "..." act as a rest opertor inside a funtion
- It is used when we don't know how many arguments will the user pass, so we add these 3 dots in the argument
- Now yeh voh saare argument ko combine karke, array mein daal dega.
- console mein print karke dekho, you will see. 

*/


function calCartPrize(...num1){
    return num1;
}
console.log(calCartPrize(2,3,4,5,6))