function runProgram(input) {
  input = input.trim().split(/[\n\r]+/);
  var tests = +input[0];
  for (var z = 0, line = 1; z < tests; z++) {
    var N = +input[line++];
    var elem = input[line++].trim();
    var i = 0;
    var j = 0;
    var length = 0;
    var count = 0;
    var obj = {};
    while (j < N) {
      if (!obj[elem[j]] || obj[elem[j]] < 2) {
        obj[elem[j]] = obj[elem[j]] ? obj[elem[j]] + 1 : 1;
        length = Object.values(obj).reduce((a, b) => a + b);
        j++;
        count += length;
      } else {
        obj[elem[i]]--;
        if (obj[elem[i]] == 0) {
          delete obj[elem[i]];
        }
        i++;
      }
    }
    console.log(count);
  }
}
if (process.env.USERNAME === "prasa") {
  runProgram(`1
5
aabba`);
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
