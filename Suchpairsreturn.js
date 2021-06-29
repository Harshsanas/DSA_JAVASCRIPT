function runProgram(input) {
  var input = input.trim().split(/[\n\r]+/);
  var tests = Number(input[0]);
  for (var k = 0, line = 1; k < tests; k++) {
    var [num, sum] = input[line++].trim().split(" ").map(Number);
    var elem = input[line++].trim().split(" ").map(Number);

    var i = 0;
    var j = num - 1;
    var flag = true;
    elem.sort((a, b) => a - b);
    while (i < j) {
      if (elem[i] + elem[j] === sum) {
        console.log(1);
        flag = false;
        break;
      }
      if (elem[i] + elem[j] < sum) {
        i++;
      }
      if (elem[i] + elem[j] > sum) {
        j--;
      }
    }
    if (flag) {
      console.log(-1);
    }
  }
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`1
5 2
3 4 0 2 7`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  var read = "";
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
