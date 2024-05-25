/*
1. We cant use await  without async.
2. When we declare a function as a async then that function will return promise and if we return a value 
from that function it will wrap that value in a promise and return as a Promise.
3. When await will be encountered inside async function then execution context of that function will be suspended from call stack until
promise will be resolved after resolving promise again function will comeback to call stack.
4.




*/
let p1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('Promise 1')
    },50)
})

let p2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('Promise 2')
    },50)
})

async function handlePromise(){
    console.log('start handlePromise');
    const res1 = await p1;
    console.log(res1);
    const res2 = await p2;
    console.log(res2);
}
handlePromise();
console.log('Hi from global context');
for(let i=0;i<10000;i++){
    console.log('hi');
}
