function runProgram(input) {
  input = input.trim().split(/[\n\r]+/);
  let tests = +input[0];
  for (let x = 0, line = 1; x < tests; x++) {
    let N = +input[line++];
    let elem = input[line++].trim().split(" ").map(Number);
    //console.log(N, elem);
    let stack = [];
    let ans = [];
    ans[0] = -1;
    stack.push(elem[elem.length - 1]);
    for (let i = N - 1; i >= 0; i--) {
      while (stack.length !== 0 && stack[stack.length - 1] <= elem[i]) {
        stack.pop();
      }
      if (stack.length === 0) {
        ans[i] = -1;
      } else {
        ans[i] = stack[stack.length - 1];
      }
      stack.push(elem[i]);
    }
    console.log(ans.join(" "));
  }
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`
    1
    4
    1 3 2 4
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
