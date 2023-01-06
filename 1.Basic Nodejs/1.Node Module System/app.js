const circle = require("./circle.js");
//console.log(circle);
console.log(circle);//function
console.log(circle.area(5));
console.log(circle.cerenceircumf);

/*
### Node Module & types of module?
- we can use es6 import, export by adding "type":"module" in package.json
- when you have too much code in a single file you would like to separate them in multiple files so that they are reusable and modular.
- Module is a set of functions or variables.
- console.log(process) and find the module.exports = {}
- 3 types of module.
  - local module (own created module)
  - built-in-modules (node.js own module)
  - External modules (3rd party module mainly managed by npm)

### 1 Window and Global Object
- All js method have in window object.
 - console.log(); or console.log();
 - alert();

But don't have window object in node, here have global object.

### 2 Creating a Module
- one file one module
- console.log(module); //built-in
 - id:
 - path:
 - exports: {}
 - parent:
 - filename:
 - loaded:

### 2 Loading a Module
- Load module from anothet file
- require(); //built-in method of node
//app.js
require("./circle");

//circle.js
console.log("Hello world");
*/