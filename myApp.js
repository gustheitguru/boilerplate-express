
var express = require('express');
var app = express();


// --> 7)  Mount the Logger middleware here



// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */
var HW = 'Hello World'; // has to be a Var to pass into console.log to allow for logging
console.log(HW);

/** 2) A first working Express Server */
// app.get('/', (req, res) => {
// 	res.send('Hello Express');
// });

//app.get is and express function to server web pages
//'/' is for root home page
//(req, res) - is request and response being passed into the function
// => ES6 function call 
// res.send(); is what will be servered on the webpage

/** 3) Serve an HTML file */
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html');
});
//same functions as project 2
// res.sendFile - will send and HTML file
// __dirname is node development best practice for returning root development
// + file path to index.html


/** 4) Serve static assets  */
app.use("/assets", express.static(__dirname + "/public"));
//app.use(express.static(__dirname + "/public"));
// both work 
// if the path is not passed it will start are root directory
// this is for CSS, images file and JS Scripts

/** 5) serve JSON on a specific route */


/** 6) Use the .env file to configure the app */
 
 
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !


/** 8) Chaining middleware. A Time server */


/** 9)  Get input from client - Route parameters */


/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
