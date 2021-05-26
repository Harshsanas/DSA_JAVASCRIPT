function runProgram(input) {
  var input = input.trim().split(/[\n\r]+/);
  var num = +input[0];
  var elem = input[1].trim().split(" ").map(Number);
  //console.log(N, elem);
  let stack = [];
  let output = [];
  output[0] = -1;
  stack.push(elem[0]);
  for (let i = 1; i < num; i++) {
    while (stack[stack.length - 1] >= elem[i]) {
      stack.pop();
    }
    if (stack.length === 0) {
      output[i] = -1;
    } else {
      output[i] = stack[stack.length - 1];
    }
    stack.push(elem[i]);
  }
  console.log(output.join(" "));
}
if (process.env.USERNAME === "prasa") {
  runProgram(`8
39 27 11 4 24 32 32 1`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  var read = "";
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
