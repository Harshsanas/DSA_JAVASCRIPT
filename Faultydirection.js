function runProgram(input) {
  var input = input.trim().split(/[\n\r]+/);
  //   console.log(input);

  tests = Number(input[0]);
  //   console.log(tests);

  for (var i = 0, line = 1; i < tests; i++) {
    var num = Number(input[line++]);
    var elem = input[line++].trim();

    // console.log(num, elem);

    var L = 0;
    var R = 0;
    var U = 0;
    var D = 0;

    for (var j = 0; i < num; j++) {
      if (elem[j] == "L") {
        L -= 1;
      }
      if (elem[j] == "R") {
        R += 1;
      }
      if (elem[j] == "U") {
        U += 1;
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

if (process.env.USERNAME === "prasa") {
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
