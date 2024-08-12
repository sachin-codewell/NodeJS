//
class Product {

    constructor(name,price,category) {
        this.name = name;
        this.price = price;
        this.category = category
    }
}

let p1 = new Product('Iphone',65000,'Electronics');
console.log(p1);
/*
When we use new keyword then a brand new empty object is created, Product() we are calling 
constructor.
  constructor(name,price,category) {
        this.name = name;
        this.price = price;
        this.category = category
   }  by this syntax we are attaching property to brand new created empty object.
   this keyword always reffers to calling context so we are calling constructor function on newly created
   object so this will reffer to that object
*/


////////////////////example////////////////////
class Human {
    name;
    gender;
    DOB;

    constructor(name,gender,DOB) {
        this.name = name;
        this.gender = gender;
        this.DOB = DOB;
    }
}

let h1 = new Human('Sachin','male','27-07-1999');
console.log(h1);
/*In Js constructor is a special type of functiion which can return values.
    constructor(name,gender,DOB) {
        this.name = name;
        this.gender = gender;
        this.DOB = DOB;
        return 10  //any primitive datatype does not effect
    }
     constructor(name,gender,DOB) {
        this.name = name;
        this.gender = gender;
        this.DOB = DOB;
        return {}  // return an empty object at last so h1 will be {}
    }
*/

///////////////////////////////example///////////////////////////////

