
var moduleOneVar = require('./moduleOne.js');
// console.log(moduleOneVar.randomNumberOne(100, 1000000));
var moduleTwoVar = require('./moduleTwo.js');
var userNumber = 589;
// console.log(moduleTwoVar.stringKey(userNumber + 1));

var moduleThreeVar = require('./moduleThree.js');
var finalResult = moduleThreeVar.endResult();

var http = require('http');
http.createServer (function(req, res){
res.writeHead(200);
res.write("Arrielle Kooiman and Phil Curtis say the account balance is: \n" + finalResult);
res.end();
}).listen(3000);
