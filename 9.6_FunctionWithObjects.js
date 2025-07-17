// First Example : 

const user = {                      // An Object
    username: "hitesh",     
    price: 199
}


function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user)





// Second Example : You can directly write object, while calling a function
function handleObject1(anyObject1) {
    console.log(`username is ${anyObject1.username} and price is ${anyObject1.price}`);
}

handleObject1({
    username: "Rytham",
    price: 299
});
