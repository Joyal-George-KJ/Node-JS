const http = require('http'); // adding http or importing http 
const {readFileSync, writeFileSync} = require('fs'); // fs importing or you can say readFileSync, writeFileSync importing from fs module/Package
/* 
let FileData = readFileSync('package.json', 'utf8');
console.log(FileData);
*/

const PORT = 5000;


// Creating a server using http.createServer()
http.createServer((req, res) => {
    if(req.url == '/about') {
        res.end(`<a href="/"><button onclick="${ writeFileSync('packageCopy.txt', 'About Button Clicked \n', { flag: 'a'}) }">Go Back</button></a><button onclick="${  console.log(readFileSync('packageCopy.txt', 'utf8')) /* res.write(readFileSync('packageCopy.txt', 'utf8')) */ }">See The Log</button>`);
    }
    
    if(req.url == '/') {
        res.end(`<a href="/about"><button>About</button></a>`);
    }
    
}).listen(PORT, () => console.log(`Server Started...\nListening to PORT: ${PORT}\nLink is http://localhost:${PORT}`));


/* 
    note:
        # fs module is used to read and write to file system. this is a must use module because we can play with it more. I personally like it. Try using readFileSync(*Path of the file*, *fileFormater use utf8*) and writeFileSync(*Path*, *Content / Data*, *object: use {flag: 'a'} to append the data to the sile instead of reassigning*), if writeFileSync() the path is not found then it creates a file in the name of the specified file
        # http module is used to create server, we use createServer() to create a server and it has one paramenter and it is a function which contains two parameters first one is request and the other is response and they are objects. you can learn more about it by printing it in the console and investigate, the main thing in creating a server for bigginers is response.write() and response.end(), both are in the code. you can check it out more.
        # using http.createServer() we created a server but we have to assign it a port for that we use http.createServer().listen() listen() has 2 parameters they are 1st one is port number and the other is while listening on the port what has to be displayed on the console and it is an anonymus function
*/
