//split(/[\r\n]+/)

function runProgram(input) {
  var input = input.trim().split("\n");
  var num = input[1].trim().split(" ").map(Number);
  console.log(num);
  var pro = 1;
  for (var i = 0; i < num.length; i++) {
    pro = pro * num[i];
  }
  console.log(pro);
}
if (process.env.USERNAME === "prasa") {
  runProgram(`5
3 5 2 9 4`);
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
