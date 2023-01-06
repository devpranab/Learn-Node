/*
Nodejs Syllabus:
Basics Nodejs
Node Module System
Window and Global Object
Built-in Node Module
Third-party Node Module
Asynchronous Nodejs
NPM - Node Package Manager
Out Package Manage & Publish
Semantic Node Verson
Node Http Server
Deploy nodejs app


https://nodejs.org/en/docs
- Download node
- $ npm init -y

### What is Node.js & Why Node.js?
- Nodejs is a JavaScript runtime, built on Chrome's v8 JavaScript engine. Its neither a framework nor a programming language.
- No need browser for run js code
- fullstack = front-end + back-end
- window is a global object for browser. before node.js we could use javascript for the browser only but now with the help of node.js we can run javascript for accessing our local machine. try console.log(), window.alert() at the browser and in the terminal.
- Node.js is server side environment; not a programming language.
- It utilize Google's V8 engine (developed with C++) which compiles javascript code into machine code
- a js runtime which allows us to run js in the server
- node.js does not run on browser but only vanila js
- helps us to create real time applications
- It helps to manage files (create, open, read, write, delete and close) on the server.
- it supports asynchronous programming.
- it helps to collect form data.
- It helps to manage (add, modify, delete data) database.
- Use node as back-end services.

- javascript code - v8(Browser) - machine code = runtime environment
- Ryan Dahl developed Node in 2009
 - v8(Browser) - v8 c++ = Node

### Why Nodejs
- Light and cross-platform
- Better performance, very fast
- Highly scalable
- Huge number of packages and library
- Front-end implementation of javascript

### Companies that use Node
- Linkedin, Nasa, Walmart, ebay, Uber

### Environment setup
- check node is already installed or not using the command: node --version or node -v
- [Node.js](https://nodejs.org/en/) download & install
- Editor: anything; I prefer [Visual Studio Code](https://code.visualstudio.com/)
- type node and enter for using Node REPL and try writing some javascript code here like console.log(), mathematical calculations
- window is a global object in the fornt end; global is the global object in the backend

### Our First Node Program
- Open vs in with js folder > Open Terminal > node fileName.js (Run code)

### Deploy nodejs app in github
- ctrl + c = close server
- $ git init
- .gitignore_//node_modules
- git status
- git add .
- $ git commit -m ""

### Deploy nodejs app at heroku
- "start": "node index.js" //node index.js
- Deploy at heroku.com > login > 
- Search heroku cli and install
- https://dashboard.heroku.com/new-app > create new app > 
- $ heroku login and press any key
- .gitignore_//node_modules
- const PORT = process.env.PORT;
- remove hostName
- $ git add .
- Procfile_web: node index.js
- $ git init .
- $ git add .
- $ git commit -m
- $ heroku git:remote -m node-app
- $ git remote
- $ git push heroku master
- heroku > setting > domain link

### Deploy nodejs app at github
- ctrl + c = server closed
- git init
- .gitignore_node_modules/
- git add .
- git commit -m ""

### Important Third Party NPM
1.nodemon -g
*/

/* Nodejs Interview Questions

1. What is Node.js?

2. What is npm?
- Node package manager.
- https://dhtmlx.com/blog/top-10-npm-packages-time-guest-post/

2. What is module?
2. Type of module?
- File based, build in, third party.
- File based (custom code)
- build in (nodejs.com)
- third party (npmjs.com)

3. What is module system?
3. What is module vs packages?
4. Different between node & JavaScript?
5. What is Window and Global Object?



# MongoDB Interview Questions
1. Explain about MongoDB?
2. Which data type accept MongoDB?
3. Different between MongoDB vs MySQL?
4. What is MongoDB Atlas?
5. What is Relational database?


### Tell some cloud database?
- AWS, Google cloud
*/