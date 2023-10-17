/*imperative lang - in imperative lang we define for a task what to do ,how to do, where to do. Java ,C++,JS
  delarative lang - in delarative lang for a task we only decide what to do. SQL

iterator - js object {value,done(),next()} work like concept of declarative lang.
{
value:holds fetched value,
next():return an object which is containing value
done():we traverse the whole collection or not
}
*/

//making our own iterator
function fetchValue(arr) {
  let index = 0;
  function next() {
    let next = { value: undefined, done: false };
    if (index >= arr.length) {
      next.done = true;
      return next;
    } else {
      next.value = arr[index];
      index++;
    }
    return next;
  }
  return { next };
}

let arr = [1, 2, 3, 3, 4, 5, 6];
let y = fetchValue(arr);
console.log(y.next());
console.log(y.next());
console.log(y.next());
console.log(y.next());
console.log(y.next());
console.log(y.next());
console.log(y.next());
console.log(y.next());
