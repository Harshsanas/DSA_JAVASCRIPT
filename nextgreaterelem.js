function runProgram(input) {
  var input = input.trim().split(/[\n\r]+/);
  //   console.log(input);

  var tests = Number(input[0]);
  //   console.log(tests);

  for (var i = 0, line = 1; i < tests; i++) {
    var num = Number(input[line++]);
    var elem = input[line++].trim().split(" ").map(Number);

    // console.log(elem, num);

    var output = [];
    var stack = [];

    output[0] = -1;

    stack.push(elem[elem.length - 1]);

    // console.log(stack);

    for (var j = num - 1; j >= 0; j--) {
      while (stack[stack.length - 1] <= elem[j] && stack.length !== 0) {
        stack.pop();
      }
      if (stack.length === 0) {
        output[j] = -1;
      } else {
        output[j] = stack[stack.length - 1];
      }
      stack.push(elem[j]);
    }
    console.log(output.join(" "));
  }
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`1
4
1 3 2 4`);
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
