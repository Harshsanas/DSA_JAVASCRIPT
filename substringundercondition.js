function runProgram(input) {
  var input = input.trim().split("");
  //   console.log(input);

  var array = [];

  for (var i = 0; i < input.length; i++) {
    var str = "";
    for (var j = i; j < input.length; j++) {
      str = str + input[j];

      if (str[0] == str[str.length - 1]) {
        array.push(str);
      }
    }
  }
  console.log(array.length);
}

if (process.env.USERNAME === "prasa") {
  runProgram(`abcab`);
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
