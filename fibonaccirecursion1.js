function runProgram(input) {
  input = input.trim().split(/[\n\r]+/);
  let num = +input[0];
  console.log(Fibonacci(num));
}
function Fibonacci(num) {
  if (num == 0) return 0;
  else if (num == 1) return 1;
  else {
    return Fibonacci(num - 1) + Fibonacci(num - 2);
  }
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`
4
`);
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
