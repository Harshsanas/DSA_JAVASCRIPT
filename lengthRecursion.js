function runProgram(input) {
  var input = input.trim().split("");
  console.log(strLength(input));
}

function strLength(input){
    if (input == "") {
      return 0;
    } else {
      return input.length;
    }
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`masaischool`);
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
