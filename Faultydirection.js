function runProgram(input) {
  input = input.trim().split(/[\n\r]+/);
  // console.log(input);
  var tests = Number(input[0]);
  for (var i = 0, Line = 1; i < tests; i++) {
    var num = Number(input[Line++]);
    var elem = input[Line++].trim();
    //console.log(N, elem);
    var R = 0;
    var L = 0;
    var U = 0;
    var D = 0;
    for (var j = 0; j < num; j++) {
      if (elem[j] == "R") {
        R += 1;
      }
      if (elem[j] == "U") {
        U += 1;
      }
      if (elem[j] == "L") {
        L -= 1;
      }
      if (elem[j] == "D") {
        D -= 1;
      }
    }
    if (L + R == 0 && U + D == 0) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`2
5
RLRUD
4
LRUD`);
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
