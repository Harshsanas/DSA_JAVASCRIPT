function runProgram(input) {
  var input = input.trim().split(/[\r\n]+/).map(Number);
  console.log(findfactorial(input));
  
}
const findfactorial = (e) => {
  if (e <= 1) {
    return 1;
  } else {
    return e * findfactorial(e - 1);
  }
};
if (process.env.USERNAME === "lenovo") {
  runProgram(`5`);
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
