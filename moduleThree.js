


var moduleOneVar = require('./moduleOne');
var moduleTwoVar = require('./moduleTwo');

function firstSecondMod (firstMod, secondMod){
  // return result of first into second
var random = moduleOneVar.randomNumberOne(100, 100000);
return moduleTwoVar.stringKey(random);

}

module.exports = {
endResult: firstSecondMod
}
