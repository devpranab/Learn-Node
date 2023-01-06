/*
//import http build in module of node
const http = require('http');

//var assits
const PORT = 4000;
const hostName = "localhost";

//server
const server = http.createServer((req, res, next) => {
 res.end("<h1>working!</h1>");
});

//listen
server.listen(PORT, hostName, ()=>{
    console.log(`server is working on http://${hostName}:${PORT}`);
});
*/

//import http build in module of node
const http = require('http');
const fs = require('fs');

//var assits
// const PORT = 4000; or
const PORT = process.env.PORT;  
const hostName = "localhost";
const home = fs.readFileSync("./home.html", "utf-8");
const about = fs.readFileSync("./about.html", "utf-8");

//server
const server = http.createServer((req, res, next) => {
 if(req.url === "/"){
    res.end(home);
 }
 if(req.url === "/about"){
    res.end(about);
 }
 if(req.url === "/blog"){
    res.end("<h1>Blog Page</h1>");
 }
 else{
    res.end("<h1>401 Page Not Found!</h1>");
 }
});

//listen
server.listen(PORT, hostName, ()=>{
    console.log(`server is working on http://${hostName}:${PORT}`);
});