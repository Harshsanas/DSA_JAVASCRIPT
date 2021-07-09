function runProgram(input) {
  var input = input.trim().split("").map(Number);
  console.log(fibonacciNum(input));
}

function fibonacciNum(elem){
    if (elem == 1 || elem == 0) {
      return elem;
    } else {
      return fibonacciNum(elem - 2) + fibonacciNum(elem - 1);
    }
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`15`);
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
