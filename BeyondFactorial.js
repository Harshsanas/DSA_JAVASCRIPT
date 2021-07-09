function runProgram(input) {
  var input = input
    .trim()
    .split(/[\n\r]+/)
    .map(Number);
    console.log(factorial(input).toFixed(4));
}

function factorial(n) {
  if (n == 1) {
    return 0;
  } else {
    return Math.log(n) + factorial(n - 1);
  }
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`3`);
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
