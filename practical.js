function runProgram(input) {
  var input = input.trim().split("\n");
  console.log(input);
}

if (process.env.USERNAME === "prasa") {
  runProgram(`2
5
1 2 3 4 5
2
100 1`);
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
