function runProgram(input) {
  var input = input.trim().split(/[\n\r]+/);
  // console.log(input);

  var tests = Number(input[0]);
  // console.log(tests);

  for (var i = 0, line = 1; i < tests; i++) {
    let str_array = input[line++].trim();
    // console.log(str_array);

    var count = 1;
    var total = 0;

    for (var j = 0; j < str_array - 1; j++) {
      if (str_array[j] === str_array[j + 1]) {
        count++;
      } else {
        count = 1;
      }
      total = Math.max(total, count);
    }
    console.log(total);
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
