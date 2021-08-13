function runProgram(input) {
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  var str = input[0].trim();
  //console.log(str);
  console.log(covidVowel(str));
}
function covidVowel(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    var subStr = "";
    for (var j = i; j < str.length; j++) {
      subStr += str[j];
      //console.log(subStr);
      var vowel_a = false;
      var vowel_i = false;
      var vowel_o = false;
      var vowel_u = false;
      for (var k = 0; k < subStr.length; k++) {
        subStr[k] == "a"
          ? (vowel_a = true)
          : subStr[k] == "i"
          ? (vowel_i = true)
          : subStr[k] == "o"
          ? (vowel_o = true)
          : subStr[k] == "u"
          ? (vowel_u = true)
          : false;
      }
      if (vowel_a && vowel_i && vowel_o && vowel_u) {
        count++
      };
    }
  }
  return count;
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`dangerouscovid`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = " ";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
  });

  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
