//split(/[\r\n]+/)

function runProgram(input) {
  var input = input.trim().split("\n");
  var input1 = Number(input[0]);
  var num = input[1].trim().split(" ").map(Number);
  // console.log(input);
  // console.log(input1);
  // // console.log(num);
  var count = 0;
  for (var i = 1; i < num.length; i++) {
    if (num[i - 1] < num[i] && num[i + 1] < num[i]) {
      count = count + 1;
    }
  }
  if (num[0] > num[1]) {
    count = count + 1;
  }
  if (num[input1 - 1] > num[input1 - 2]) {
    count = count + 1;
  }
  console.log(count);
}
if (process.env.USERNAME === "prasa") {
  runProgram(`8
1 2 3 4 2 1 6 5`);
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
