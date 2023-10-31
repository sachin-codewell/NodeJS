//Int this file we are setting up http server using http module

const http = require('http');
const PORT = 4500;

// return new instance of server and take a call back as a parameter
const server = http.createServer(function reqLisner(req,res) {
    console.log(req.url,typeof req.method);
    
    if(req.url === '/home' && req.method === "GET"){
        res.end("Welcome To Home Page");
    }

    if(req.url === '/register' && req.method === "GET"){
        res.send("Welcome to register page");
    }

})


//running our server or process on port
server.listen(PORT, function exec() {
    console.log(`server is running on port: ${PORT}`)
})


/* Here we are running our http server on our local machine and our local machine address is 127.0.0.1 or localhost
our process is running on 6000 port https://127.0.0.1:6000
*/

