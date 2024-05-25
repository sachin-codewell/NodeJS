/* 
Map is an object used to store the value in the form key value pair.
Key can be anything object,any primitive datatype etc in object key can be string only.

const contacts = new Map();
contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
contacts.has("Jessie"); // true
contacts.get("Hilary"); // undefined
contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });
contacts.get("Jessie"); // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete("Raymond"); // false
contacts.delete("Jessie"); // true
console.log(contacts.size); // 1

*/

let nums = [1,2,3,2,1,44,3,4,3,5,2];
let map = new Map();

for(let i = 0;i<nums.length;i++){
    if(map.has(nums[i])){
        map.set(nums[i],map.get(nums[i])+1);
    }
    else{
        map.set(nums[i],1);
    }
}

//printing key value
for (const [key,value] of map) {
    console.log(`${key}: ${value}`);   
}

// find maximum occurence
let res = -1;
let count = 0;
for(const [key,value] of map){
    if(value>=count){
        count = value;
        res = key;
    }
}

console.log(`maximum occurence ${res}`);

// map entries
let map1 = new Map();
map1.set('b', 1);
map1.set('a', 3);
map1.set('c', 2);
console.log(map1.entries()); // { [ 'b', 2 ], [ 'a', 1 ], [ 'c', 3 ] }

//sorting map
console.log([...map1.entries()]); //[ [ 'b', 2 ], [ 'a', 1 ], [ 'c', 3 ] ]



//ways to traverse through map