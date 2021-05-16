function runProgram(input) {
  var input = input.trim().split(" ").map(Number);
  // console.log(input);
  var pi = 3;
  var area = pi * input * input;
  console.log(area);
}

if (process.env.USERNAME === "prasa") {
  runProgram(`4`);
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
