function runProgram(input) {
  var input = input.trim().split(/[\r\n]+/);

  var string1 = input[0].trim();
  var string2 = input[1].trim();

  //   console.log(input);
  //   console.log(string1, string2);

  for (var i = 0; i < string1.length; i++) {
    for (var j = 0; j < string2.length; j++) {
      if (string1[i] !== string2[i]) {
        console.log(string1[i]);
        break;
      }
    }
  }
}
if (process.env.USERNAME === "prasa") {
  runProgram(`ABCX
ABCD`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
