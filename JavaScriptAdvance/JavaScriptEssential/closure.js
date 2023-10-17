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
