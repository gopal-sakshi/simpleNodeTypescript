# COMPILER OPTIONS

`"target": "es6"`
- one key thing you need to define is the version of JavaScript the compiler will output. 
- If you need more advanced JavaScript features
        using the arrow functions, 
        const, let, 
    you can choose to use ES6 or a higher version. 
- Most of today’s browsers only understand the es6 version of JavaScript. 


`"module": "commonjs"` 
- this is the JavaScript module formatting system for structuring & organizing JavaScript code. 
- This lets the compiler use module functions such as require() and objects such as module.exports
    // https://medium.com/computed-comparisons/commonjs-vs-amd-vs-requirejs-vs-es6-modules-2e814b114a0b
- Types
    CommonJS ----> <import> using `var fs = require('fs')`           <export> `exports = function() { return 'blahblah' } `
    NodeJS -----> module.exports    <import> SAME as CommonJS       <export> `module.exports = 'blahblah'`
    AMD ------> async module loading
        define(['module1', ',module2'], function(module1, module2) {
            console.log(module1.setName());
        });


`"rootDir": "./src"` 
- a directory where the input Typescript files are stored. 


`"outDir": "./dist"` 
- this an output directory where the output structure of the compiled JavaScript will be saved. 
- In this case, JavaScript code will be saved in a folder called dist in the root directory of the main project.

`"moduleResolution": "node"` 
- a module import resolution algorithm that mimics the way the Node.js searches for modules in real-time.

`"strict": true` 
- enable all JavaScript strict type-checking options.

`"esModuleInterop": true`
- esModuleInterop allows us to compile ES6 modules to commonjs modules.

`"exclude":[]` 
- tells Typescript not to compile specified files or folders. 
- In this case, you can tell the Typescript not to compile the node_modules folder 
    since it already installed the JavaScript versions of Node.js library dependencies.


    