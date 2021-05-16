function runProgram(input) {
  var input = input.trim();
  // console.log(input);
  var string = "";
  for (let i = 0; i < input.length; i = i + 2) {
    var num = Number(input[i + 1]);

    for (let j = 0; j < num; j++) {
      string = string + input[i];
    }
  }
  console.log(string);
}
if (process.env.USERNAME === "prasa") {
  runProgram(`a3b2`);
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
