/*
A Set in JavaScript is a useful collection type for storing unique values. It provides several methods to add, remove, and check for values, and allows iteration over its elements in insertion order. This makes it a versatile tool for managing collections of data without duplicates.
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
