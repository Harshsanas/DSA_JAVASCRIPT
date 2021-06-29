function runProgram(input) {
  var input = input.trim().split(/[\r\n]+/);
  // console.log(input);
  var tests = Number(input[0]);
  //   console.log(tests);

  var array = [];

  for (var i = 0, line = 1; i < tests; i++) {
    var [N, K] = input[line++].trim().split(" ").map(Number);
    // console.log(N, K);

    if (N == 1) {
      if (array.length == 0) {
        console.log("No Food");
      } else {
        console.log(array[array.length - 1]);
        array.pop();
      }
    } else if (N == 2) {
      array.push(K);
    }
  }
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`6
1
2 5
2 7
2 9
1
1`);
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
