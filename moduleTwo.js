
function string(userString) {
  // var covertString = (userString).toFixed(2)
  // userString = "" + covertString + "";
  // var toString = convertString.toString();
  var toString = (userString).toFixed(2).toString();
return "$" + toString;
}

module.exports = {
  stringKey: string
}
