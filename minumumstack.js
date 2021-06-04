function runProgram(input) {
  var input = input.trim().split(/[\r\n]+/);
  //   console.log(input);

  var tests = Number(input[0]);
  //   console.log(tests);

  var minimum = [];
  var stack = [];

  for (var i = 0, line = 1; i < tests; i++) {
    var [conditon, num] = input[line++].trim().split(" ");
    var num = Number(num);
    // console.log(conditon, num);

    if (conditon === "push") {
      stack.push(num);
      //   console.log(stack);
      if (minimum.length == 0) {
        minimum.push(num);
        // console.log(minimum);
      } else if (minimum[minimum.length - 1] >= num) {
        minimum.push(num);
        // console.log(minimum);
      }
    } else if (conditon == "getMin") {
      console.log(minimum[minimum.length - 1]);
      //   console.log(output, minimum);
    } else {
      var output = stack.pop();
      if (output === minimum[minimum.length - 1]) {
        minimum.pop();
      }
    }
  }
}
//

if (process.env.USERNAME === "prasa") {
  runProgram(`8
push 5
push 3
push 1
getMin
pop
getMin
pop
getMin`);
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
