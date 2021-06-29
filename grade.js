//split(/[\r\n]+/)

function runProgram(input) {
  var grade = input.trim().split("\n").map(Number);
  //   console.log(input);
  if (grade == 100) {
    console.log("A");
  } else if (grade >= 90 && grade < 100) {
    console.log("B");
  } else if (grade >= 80 && grade < 90) {
    console.log("C");
  } else {
    console.log("F");
  }
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`80`);
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
