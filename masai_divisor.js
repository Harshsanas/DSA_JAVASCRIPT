function runProgram(input) {
  var input = input.trim().split(" ").map(Number);
  var left = input[0];
  var k = input[2];
  var right = input[1];
  console.log(input);
  var count = 0;
  for (var i = left; i <= right; i++) {
    if (i % k == 0) {
      count = count + 1;
    }
  }
  console.log(count);
}

if (process.env.USERNAME === "prasa") {
  runProgram(`1 10 1`);
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
