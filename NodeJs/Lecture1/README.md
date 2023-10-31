1- NodeJs is run time environment for JS that provides many to resources to javascript to make js powerfull.
resources - event loop,setTimeOut,callback queue, micro queue, fs, os, path, api call, processes and runtime variable.

2- NodeJs madeup of Libuv, V8 engine, js api and functions.

5- Asynchronous APIs: Node.js provides asynchronous APIs for common I/O operations, such as reading files, making network requests, and interacting with databases. These APIs allow you to work with non-blocking I/O easily using callbacks, promises, or async/await.

3- libuv - Make Nodejs compatible with all os system. libuv is a multi-platform C library that provides the asynchronous I/O capabilities used by Node.js for handling events, managing the event loop, and providing cross-platform support for operations like file system access, networking, and timers. It abstracts the underlying I/O operations of the operating system and provides a consistent API for Node.js to work with. This is fundamental for Node.js to be able to handle non-blocking I/O operations efficiently and to be cross-platform.

4- Blocking I/O:

In a blocking I/O operation, when a program requests an I/O operation (e.g., reading data from a file, making a network request, or querying a database), the program execution is paused, and it waits for the I/O operation to complete before moving on to the next task.
During this waiting period, the program is essentially "blocked" from doing anything else. This can lead to inefficient resource usage and can make a program unresponsive, especially in a multi-user or multi-tasking environment.
Blocking I/O is straightforward to work with and often easier to understand, but it can be less efficient when dealing with many concurrent I/O operations.

Non-blocking I/O:

In non-blocking I/O, a program continues to execute and doesn't wait for an I/O operation to complete. Instead, it checks the status of the I/O operation and keeps doing other tasks.
Non-blocking I/O is typically used with asynchronous programming techniques, like callbacks, promises, or async/await in modern languages. These techniques allow the program to register a callback function or a promise to be executed once the I/O operation is finished.


6- Global in NodeJS
__dirname, __filename, console, require(), module, process, setTimeout(), setInterval(), and clearTimeout(),