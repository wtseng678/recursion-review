// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  if(obj === null || typeof obj === "number" || typeof obj === "boolean") {
    return '' + obj;
  } else if (typeof obj === "string") {
    return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return "[]";
    } else {
      var temp = [];      
      obj.forEach(function(element) {
        temp.push(stringifyJSON(element));
      });
      return "[" + temp + "]";
    }
  } else if (obj instanceof Object){
    var arr = [];

    Object.keys(obj).forEach(function(key){
      var keyStr = '"' + key + '":';
      var keyValue = obj[key];

      if (typeof keyValue === "function" || typeof keyValue === undefined) {
        arr.push("");
      } else if (typeof keyValue === "string") {
        arr.push(keyStr + '"' + keyValue + '"');
      } else if (typeof keyValue === "boolean" || typeof keyValue === "number" || keyValue === null) {
        arr.push(keyStr + keyValue);
      } else if (keyValue instanceof Object) {
        arr.push(keyStr + stringifyJSON(keyValue));
      }

    });

    return "{" + arr + "}";

  } else {
    return "Improper syntax";
  }

};
