//split(/[\r\n]+/)

function runProgram(input) {
  var input = input.trim().split("\n");
  for (var i = 0; i < input.length; i++) {
    input[i] = input[i].trim().split(" ").map(Number);
  }
  console.log(input);
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`3 5
1 2 3 4 5
6 7 8 9 10
11 12 13 14 15
`);
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
