function runProgram(input) {
  input = input.trim().split(/[\n\r]+/);
  // console.log(input);
  var tests = Number(input[0]);
  // console.log(tests);
  for (var i = 0, line = 1; i < tests; i++) {
    var elem = input[line++].trim();
    //console.log(elem);
    var sum = 0;
    var count = 1;
    for (var j = 0; j < elem.length - 1; j++) {
      if (elem[j] === elem[j + 1]) {
        count++;
      } else {
        count = 1;
      }
      sum = Math.max(sum, count);
    }
    console.log(sum);
  }
}
if (process.env.USERNAME === "prasa") {
  runProgram(`4
aaaaaa
aaabbb
asd
aabbcc`);
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
