/*
A Set in JavaScript is a useful collection type for storing unique values. 
It provides several methods to add, remove, and check for values, and allows
iteration over its elements in insertion order. 
This makes it a versatile tool for managing collections of data without duplicates.

Certainly! In JavaScript, a Set is a built-in object that allows you to store unique values of any type, whether primitive values or object references. Here’s an example of how you can use a Set:
*/
const mySet = new Set();

// Add values to the Set
mySet.add(1);
mySet.add(5);
mySet.add(1); // Duplicate value, will not be added
mySet.add(3);

// Check if a value is in the Set
console.log(mySet.has(1)); // true
console.log(mySet.has(2)); // false

// Remove a value from the Set
mySet.delete(5);

// Get the size of the Set
console.log(mySet.size); // 2

// Iterate over the Set
for (let value of mySet) {
    console.log(value); // 1, 3
}

// Clear the Set
mySet.clear();
console.log(mySet.size); // 0







///////////////////////////Example//////////////////////////
// Creating a new Set
const Set = new Set();

// Adding values to the Set
mySet.add(1);
mySet.add(2);
mySet.add(2); // Duplicate value, won't be added
mySet.add('hello');
mySet.add({ name: 'Alice' });

// Checking the size of the Set
console.log(mySet.size); // Output: 4

// Checking if a value exists in the Set
console.log(mySet.has(1)); // Output: true
console.log(mySet.has(3)); // Output: false

// Removing a value from the Set
mySet.delete(2);
console.log(mySet.size); // Output: 3

// Iterating over the Set
mySet.forEach(value => {
    console.log(value);
});
// Output:
// 1
// 'hello'
// { name: 'Alice' }

// Converting a Set to an Array
const myArray = [...mySet];
console.log(myArray); // Output: [ 1, 'hello', { name: 'Alice' } ]

// Clearing all elements from the Set
mySet.clear();
console.log(mySet.size); // Output: 0
