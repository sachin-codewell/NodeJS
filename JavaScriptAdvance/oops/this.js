let user1 = {
    name: 'Sachin Yadav',
    age: 25,
    company: 'Wipro',
    printDetails: function(){
        console.log(this);
    }
}

let user2 = {
    name: 'Shivam Yadav',
    age: 19,
    company: 'Google',
    printDetails: () => {
        console.log(this);
    }
}

user1.printDetails();
/* except one case this keyword always reffers calling context/site.
Here we are calling printDetails() on user1. So calling context is user1.
OP = {
    name: 'Sachin Yadav',
    age: 25,
    company: 'Wipro',
    printDetails: [Function: printDetails]
}*/
user2.printDetails();
/* In case of arrow function this is resolved through lexical scoping. 
Here in arrow function this is unknown so it will go fot its parent lexical scope which is global. and 
in nodejs global objects reffers to empty object.
op = {}
*/

let user3 = {
    name: 'Ramakant Yadav',
    age: 19,
    company: 'Advant',
    printDetails: function() {
        let address = {
            village: 'Paskia',
            district: 'Azamgarh',
            pincode: 276303,
            print: ()=>{
                console.log(this);
            }
        }
        address.print();
    }
}

user3.printDetails()
/*
op = {
  name: 'Ramakant Yadav',
  age: 19,
  company: 'Advant',
  printDetails: [Function: printDetails]

  'this' is unknown in arrow function so it will look for 'this' in parent's lexical scope means in
  display function. And in display dunction calling context is user3.
} */