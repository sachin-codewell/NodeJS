for(let i=0;i<5;i++){
    setTimeout(function(){
        process.stdout.write(`${i},`);;
        if (i === 4) console.log();
    },0)
    
}
/*Block Scope: The let keyword declares a variable that is block-scoped. In this case, each iteration of the loop has its own unique i variable.
Closure: Each anonymous function passed to setTimeout forms a closure over the value of i for that particular iteration. Therefore, when the setTimeout callbacks execute, they log the correct value of i for each iteration.*/


for(var i=0;i<5;i++){
    setTimeout(function(){
        process.stdout.write(`${i},`);
    },0) 
}

/*Function Scope: The var keyword declares a variable that is function-scoped (or globally scoped if not inside a function). In this loop, there is only one i variable that is shared across all iterations.
Closure: Each anonymous function passed to setTimeout closes over the same i variable. Since setTimeout executes asynchronously after the loop has completed, all callbacks reference the final value of i, which is 5 (the value after the last loop iteration).

OP - 0,1,2,3,4,
     5,5,5,5,5
*/


