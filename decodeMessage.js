function runProgram(input) {
  var input = input.trim().split("");
   console.log(input);
  var count = 1;
  var maincount = 1;

  for (var i = 0; i < input.length - 1; i++) {
    if (input[i] == input[i + 1]) {
      count++;
      console.log(count)
    } else {
      count = 1;
    }
    if (maincount < count) {
      maincount = count;
    }
  }
  console.log(maincount);
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`ATTCGGGA`);
}
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
