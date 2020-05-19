
var express = require('express');
var app = express();
var bodyParser = require('body-parser') // added this as a required field 



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
// app.get('/json', (req, res) => {
//   res.json({"message": "Hello json"});
// });
//JSON response test by going to url/json
// put in /json as directory of json data 
// can run fucntions to return real time data
// res.json() can send a message or query a DB


/** 6) Use the .env file to configure the app */
// commands are processed as writen. first to last had to comment out step 5 to get step 6 to work
// app.get('/json', (req, res) => {
// if (process.env.MESSAGE_STYLE === "uppercase")
//   res.json({"message": "HELLO JSON"});
// }) else
//   res.json({"message": "Hello json"});
// process.env looks at the .env file and checks for varibles
// if statment to check which response to send 

 
/** 7) Root-level Middleware - A logger */
//  place it before all the routes ! - have to comment out step 6
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !
// app.use(function middleware(req, res, next){
//   var string = req.method + " " + req.path + " - " + req.ip;
//   console.log(string);
//   next();
// });
// setting up varible 
// var is using the req.method spce req.path - requesting client IP 
// req.method - uses all HTTP methods (GET, POST, PUT, DELETE)
// req.path - what ever is after the URL/... before .. ?
// req.ip - is requesting client IP 


/** 8) Chaining middleware. A Time server */
// app.get('/now', (req, res, next) => {
//         req.time = new Date().toString();
//         next();
//         },
//         function(req, res) { res.send( {time: req.time}); 
//       })
// setting request time to new global object. string
// call the next function
// res.send to send time in JSON form
//https://marymafa.github.io/2018/09/19/c-Node-and-Express-Implement-a-Root-Level-Request-Logger-Middleware.html


/** 9)  Get input from client - Route parameters */
// app.get('/:word/echo', function(req, res){
//   var word = req.params.word;
//   res.json({echo: word});
//   console.log(word);
// });
// /:word/echo is on the end of the URL to query app data
// set word as a Var to req.params.word - location of data
// return JSON

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>
app.route('/name').get((req, res) => { //have to identify .route and . get spereratly
  let first = req.query.first; //var 
  let last = req.query.last;	//var
  let jsonObj = { name: first + ' ' + last }; //created a JSON object
  console.log(jsonObj);
  res.send(jsonObj); //sending json object
}).post(); //tihs is for the next challange
  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !
app.use(bodyParser.urlencoded({extended: false}));

//eturns middleware that only parses urlencoded bodies and only looks 
//at requests where the Content-Type header matches the type option
//Note: extended=false is a configuration option that tells the parser 
//to use the classic encoding. When using it, values can be only strings or arrays. 
//The extended version allows more data flexibility, but it is outmatched by JSON.

/** 12) Get data form POST  */



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
