function runProgram(input) {
  var input = input.trim().split(" ").map(Number);
  // console.log(input);
  var length = input[0];
  var breadth = input[1];
  // console.log(length);
  // console.log(breadth);
  var perimeter = 2 * (length + breadth);
  console.log(perimeter);
}

if (process.env.USERNAME === "prasa") {
  runProgram(`3 6`);
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
