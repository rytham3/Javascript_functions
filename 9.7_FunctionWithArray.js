// Example one : 
let myNewArray = [200,400,600,800];

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));




// Example Two : You can directly pass array, while calling the function
function returnThirdValue(getMeArray){
    return getMeArray[2];
}

console.log(returnThirdValue([11,12,13,14]));