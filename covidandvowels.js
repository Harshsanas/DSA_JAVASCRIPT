function runProgram(input) {
  var input = input.trim();
  // console.log(input);

  var count = 0;

  for (var i = 0; i < input.length; i++) {
    var string = "";

    for (var j = i; j < input.length; j++) {
      string = string + input[j];

      // console.log(string);

      var a = false;
      var i = false;
      var o = false;
      var u = false;

      for (var k = 0; k < string.length; k++) {
        string[k] == "a"
          ? (a = true)
          : string[k] == "i"
          ? (i = true)
          : string[k] == "o"
          ? (o = true)
          : string[k] == "u"
          ? (u = true)
          : false;
      }

      if (a == true && i == true && o == true && u == true) {
        count = count + 1;
      }
    }
  }
  console.log(count);
}

if (process.env.USERNAME === "prasa") {
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
