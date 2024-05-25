/*Promise - The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
1- helps to solve the problem of inversion of control.
Inversion of control - 
2- callback hell
3- it acts as placeholder(take place of result) in those situation where we are expecting results in future.
4- an object that is returned immediately.And promise is native to javascript so promise creation is synchronous
    task in nature(returned immediately because of synchronous nature).
5- When we create a promise object then it can have three state - pending(by default),resolved,rejected.
6- a promise object have 4 property 1- state:pending,2- value:undefined,3- onfullfill:[],4- onReject:[]
7- resolve(data),reject(data) - the data that we pass to resolve or reject goes to (value:data)
8- Consume a Promise - we can handle promises using .then(). Basically .then() method take a callbak as an argument
   and register that callback to onFullfill:[cb] or onReject:[cb]. Once the promise is resolved or rejected then
   registerd callback will go into microqueue.
   .then() itself returns a promise.

*/

//creating a promise
function creatingPromise(num){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        if(num%2==0){
            resolve(num);
        }
        else{
            reject(num+1);
        }

       },5000);

    })
}

let x = creatingPromise(10);
console.log(x);


//second demo
function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Started downloading from", url);
        setTimeout(function processDownloading() { // aysnc function will be registered in runtime env with timer 7se
            let data = "Dummy data";                // after completing 7 sec will go into callback queue
            console.log("Download completed");             
            resolve(data);
        }, 7000);
    });
}

console.log("Start");
let promiseObj = fetchData("skfbjkdjbfv"); 
promiseObj.then(function A(value) { //.then handler will register function A in micro queue once promise is fullfill or
    console.log("value is", value); // or rejected
})
console.log("end");
//op - start,Started downloading from skfbjkdjbfv,end, download completed,value is Dummy data.


//third example
function movieDownload(url) {
    return new Promise(function (resolve, reject) {
        console.log("Entering url in chrome", url);
        setTimeout(function processDownloading() { 
            if(url.length>10){
                resolve("downloaded successfully");
            }
            else{
                reject("failed to download");
            }
         
        }, 7000);
    });
    
}

console.log("Start Example 3");
let movieStatus = movieDownload("skfbjkfv"); 
movieStatus.then((value)=>{
    console.log(value);},
    (value)=>{
    console.log(value);
})
console.log("end");

// catch() is also used to handle promise rejection

function shoesPayment(price){
    return new Promise((resolve,reject)=>{
        if(price>5000){
            resolve("Coverse shoes is placed successfully");
        }
        else{
            reject("amount is less");
        }
    })
}

shoesPayment(4000)
.then((value)=>{
    console.log(value);
})
.catch((value)=>{
    console.log(value);
})

//short form of promise
let t = Promise.reject("kjjkvv") ; //=> function exa((res,rej)=>{rej("kjjkvv")})
let u = Promise.resolve("lnjklenr") //=> function exa((res,rej)=>{res("lnjklenr")})