function runProgram(input) {
  var input = input.trim().split(/[\n\r]+/);
  // console.log(input);
  var num = Number(input[0]);
  // console.log(num);
  var elem = input[1].trim().split(" ").map(Number);
  // console.log(elem);
  var total = "";
  var stack = [];
  for (var i = 0; i < num; i++) {
    if (i == 0) {
      total = "-1";
      stack.push(elem[i]);
    } else {
      for (var j = stack.length - 1; j >= 0; j--) {
        if (stack[j] < elem[i]) {
          total = total + " " + stack[j];
          stack.push(elem[i]);
          break;
        } else if (stack[j] >= elem[i]) {
          stack.pop();
          if (j == 0) {
            stack.push(elem[i]);
            total = total + " " + "-1";
          }
        }
      }
    }
  }
  console.log(total);
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
