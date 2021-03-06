function runProgram(input) {
  input = input.trim().split(/[\n\r]+/);
  let num = +input[0];
  let elem = input[1].trim().split("");
  //console.log(elem, num);
  let stack = [];
  for (let i = 0; i < num; i++) {
    if (stack.length != 0 && stack[stack.length - 1] == elem[i]) {
      stack.pop();
    } else {
      stack.push(elem[i]);
    }
  }
  // console.log(stack)
  if (stack.length != 0) {
    console.log(stack.join(""));
  } else {
    console.log(-1);
  }
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`5
aabbc`);
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
