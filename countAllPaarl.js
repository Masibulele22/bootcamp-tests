function countAllPaarl(str) {
    var str4 = []; 
    var str2 = str.split(', ');
  for (var i = 0; i<str2.length; i++) {
    
  var str3 = str2[i];
  if (str3.startsWith('CJ')) {
  str4.push(str3);
  }
  }
    var returns = results;
    return str4.length;
}

var results = (countAllPaarl('str'));