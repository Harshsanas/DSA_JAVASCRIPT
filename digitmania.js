function runProgram(input) {
  var input = input.trim().split(/[\n\r]+/);
  var test = +input[0];
  for (var x = 0, line = 1; x < test; x++) {
    var [N, K] = input[line++].trim().split(" ").map(Number);
    var elem = input[line++].trim().split(" ");
    // console.log(N, K);
    // console.log(elem)
    var count = 0;
    var answer = "";
    for (var i = 0; i < N; i++) {
      var count1 = 0;
      for (var j = 0; j < elem[i].length; j++) {
        if (elem[i][j] == K) {
          count1++;
        }
      }
      if (count1 > count) {
        count = count1;
        answer = elem[i];
      }
      if (count1 == count) {
        answer = Math.max(Number(answer), Number(elem[i]));
      }
    }
    console.log(answer);
  }
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`2
  5 2
  222 2221 12221 2222 12
  5 2
  222 2221 12221 2212 12`);
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
