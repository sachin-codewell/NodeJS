function outer() {
  let i = 0;
  let arr = [1, 2, 3, 4, 5];
  function inner() {
    let j = 0;
    j++;
    i++;
    console.log(i, j);
  }
  return inner;
}
let x = outer();
x();
x();

/*
OP - 1,1
     2,1
closure only holds those outer variable which has been use used in inner function here in scope
closure only holds the reference of i not od array arr
*/

function someTask(task) {
  setTimeout(() => {
    console.log(task);
  }, 2000);
}
someTask("learning closure");

//Here beacuse of closure we are able to access task even its function  is poped out of call stack.Closure holds the reference of task variable.


////////////////////////EXAMPLE/////////////////////////////
function bakery(date) {
  // The function creates a closure around the 'date' variable
  return function() {
      console.log("These cookies were baked on: " + date);
  }
}

const cookiesPackage1 = bakery("August 12, 2024");
const cookiesPackage2 = bakery("August 13, 2024");

// Even though the 'bakery' function has completed, the returned function remembers the date
cookiesPackage1(); // Output: "These cookies were baked on: August 12, 2024"
cookiesPackage2(); // Output: "These cookies were baked on: August 13, 2024"



//////////////////////////EXAMPLE///////////////////////////////
function createBankAccount(initialBalance) {
  let balance = initialBalance; // The account balance, private to the function

  // The closure: Functions that interact with the balance
  return {
      deposit: function(amount) {
          balance += amount;
          console.log(`Deposited: $${amount}. Current Balance: $${balance}`);
      },
      withdraw: function(amount) {
          if (amount <= balance) {
              balance -= amount;
              console.log(`Withdrew: $${amount}. Current Balance: $${balance}`);
          } else {
              console.log("Insufficient funds");
          }
      },
      checkBalance: function() {
          console.log(`Current Balance: $${balance}`);
      }
  };
}

const myAccount = createBankAccount(100); // Create a bank account with an initial balance of $100

myAccount.deposit(50);   // Deposited: $50. Current Balance: $150
myAccount.withdraw(30);  // Withdrew: $30. Current Balance: $120
myAccount.checkBalance(); // Current Balance: $120
