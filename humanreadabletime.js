function runProgram(input) {
  var input = input.trim().split(" ").map(Number);
  var hours;
  hours = Math.floor(input / 60);
  min = input % 60;
  if (hours < 2) {
    console.log(hours + "hr " + min + "mins");
  } else {
    console.log(hours + "hrs " + min + "mins");
  }
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`135`);
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
