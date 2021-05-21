function runProgram(input) {
  var input = input.trim().split(/[\r\n]+/);
  // console.log(input);
  var tests = Number(input[0]);
  //   console.log(tests);

  var array = [];
  var line = 1;
  for (var i = 0; i < tests; i++) {
    var [N, K] = input[line++].trim().split(" ").map(Number);
    // console.log(N, K);

    if (N === 1) {
      array.push(K);
    } else if (N === 2) {
      array.pop();
    } else if (N === 3) {
      if (array.length === 0) {
        console.log("Empty!");
      } else {
        console.log(array[array.length - 1]);
      }
    }
  }
}

if (process.env.USERNAME === "prasa") {
  runProgram(`6
1 15
1 20
2
3
2
3`);
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
