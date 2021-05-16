function runProgram(input) {
  var input = input.trim().split(/[\r\n]/);
  console.log(input);
  var test = Number(input[0]);
  console.log(test);
  rows = Number(input[1]);
  console.log(rows);
}

if (process.env.USERNAME === "prasa") {
  runProgram(`1
3
1 2 3
4 5 6
7 8 9`);
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
