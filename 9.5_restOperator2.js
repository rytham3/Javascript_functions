/*

- This type of question is asked in interviews.
- that if parameter mein val1, val2 hai and saath mein rest operator tab kya hoga? 

Answer : 2,3 will pass to val1, val2 respectively and the rest will get combined by rest Operator and will pass them to an array. 
- print karke dekho you will get the idea. 

*/


function calCartPrize(val1, val2, ...num1){
    return num1;
}
console.log(calCartPrize(2,3,4,5,6))