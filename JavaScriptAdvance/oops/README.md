1- 'this' keyword always refers or depends on calling context means on in which object context it is used or called called.

example:
function print(){
    console.log(this) // here {} object will be printed beacuse in node environment {} is global object;
}

exapmle:
const user = {
    name:"Sachin",
    tech:"MERN",
    package:3.5,
    company:"WIPRO",
    details:function(){
        console.log(this);
        console.log(this.name +this.tech +this.package +this.company )
    }
}

user.details();
op- {
  name: 'Sachin',
  tech: 'MERN',
  package: 3.5,
  company: 'WIPRO',
  details: [Function: details]
}
SachinMERN3.5WIPRO

2- arrow function doest not know about the 'this' keyword so it looks for lexical chaining
exapmle:
const user = {
    name:"Sachin",
    tech:"MERN",
    package:3.5,
    company:"WIPRO",
    details:()=>{
        console.log(this);
        console.log(this.name +this.tech +this.package +this.company )
    }
}
user.details();
op- {}
    NaN

3- In JS there is not concept of constructor overloading a class can have only one constructor.

4- constructor(name,category,price,quantity,rating){
        this.name = name
        this.category = category
        this.price = price
        this.quantity = quantity
        this.rating = rating
    }
let p1 = new Produtc(name,category,price,quantity,rating)
here new keyword will just create an new plain empty object and this will refer that object.

5- In JS constructor is speacial type of function so we can also return anyhting
by default: 
 constructor(name,category,price,quantity,rating){
        this.name = name
        this.category = category
        this.price = price
        this.quantity = quantity
        this.rating = rating
        return this;
}

constructor(){
    return 10,"sachin",false,Nan,null,symbol // return primitive datatype will not effect anything
}

constructor(){
    return {a:10}; //will assign {a:10} to reference.
}

6- In js function can be also treated as a class and by using function we can make blue print.
In js there is concept of construction function

function Student(name,rn,course){
    this.name = name;
    this.rollnumber = rn;
    this.course = course;
}

let s1 = new Student("Sachin",20464248,"B.tech");
console.log(s1);

op-  { name: 'Sachin', rollnumber: 20464248, course: 'B.tech' }


