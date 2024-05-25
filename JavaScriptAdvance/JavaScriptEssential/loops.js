/*
1.for (initialization; condition; increment/decrement) {
  // code to be executed
}

2.while (condition) {
  // code to be executed
}

3.do {
  // code to be executed
} while (condition);


*/

//for in Loop
/*
The for...in loop in JavaScript is used to iterate over the enumerable properties of an object. It is generally used for iterating over the keys of an object rather than for arrays.
Enumerable Property - can be access by all, itrable
Non-emurable - 1.Hide implementation details.
2.Protect certain properties from being exposed during iterations.
3.Maintain a clean and clear API.

*/

let object = {
    name:'Sachin',
    profile:'Software Engineer',
}

for(let key in object){
    console.log(object[key]);
}