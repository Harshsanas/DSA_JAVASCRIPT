function runProgram(input) {
  input = input.trim().split(/[\n\r]+/);
  var N = +input[0];
  //console.log(N,input)

  let stack = [];
  for (var i = 1; i <= N; i++) {
    var elem = input[i].trim().split(" ");
    //console.log(elem)
    if (elem[0] == "E") {
      stack.push(elem[1]);
      console.log(stack.length);
    } else if (elem[0] == "D") {
      if (stack.length === 0) {
        console.log(-1, 0);
      } else {
        let queue = stack.shift();
        console.log(queue, stack.length);
      }
    }
  }
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`
    5
    E 2
    D
    D
    E 3
    D
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
