// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  if (json.includes("function(")) {
    error(SyntaxError);
  }  

var first = json.charAt(0); 

  var parseSort = function(){
    if (first === "{") {
      return parseObject();
    } else if (first === "[") {
      return parseArray();
    } else if (first === "\"") {
      return parseString();
    } else if (first === "t" || first === "f") {
      return parseBool();
    } else if (first === "n") {
      return parseNull();
    } else if (first === "-" || (first && first >= 0 && first <=9)) {
      return parseNumber();
    } else {
      error("bad JSON");
    }
  }

  var parseObject = function(){
    var resultObject = {};
    first++;
    while(json[first] != "}"){
      if(json[first] = ","){
        first++;
      }
      var key = parseSort();
      first++;
      var value = parseSort();
      resultObject[key] = value;
    }
  };

  var parseArray = function(){

  };

  var parseString = function(){
    var resultString = "";
    first++;
      while(json[first] !== "\""){
        resultString += json[first]
        first++;
      }
    first++;
    return resultString;
  };

  var parseNumber = function(){
    var resultNumber = "";
      while(!isNan(json[first] || json[first] === "-" || json[first] === ".")){
      resultNumber += json[first];
      }
    return Number(resultNumber);
  };

  var parseBool = function(){
    if(first === "t"){
    first += 4;
    return true;
    } else{
    first += 5;
    return false;
    }
  };

  var parseNull = function(null){
  first += 4;
  return null;
  };
};




