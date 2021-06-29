function runProgram(input) {
  var input = input.trim().split("\n");
  var tests = Number(input[0]);

  for (var i = 0, line = 1; i < tests; i++) {
    var [num, sum] = input[line++].trim().split(" ").map(Number);
    var elem = input[line++].trim().split(" ").map(Number);
    // console.log(num, sum, elem);

    elem.sort((a, b) => a - b);

    var j = 0;
    var k = num - 1;
    var flag = false;

    while (j < k) {
      if (elem[j] + elem[k] == sum) {
        flag = true;

        console.log(j, k);
        break;
      }

      if (elem[j] + elem[k] < sum) {
        j++;
      }
      if (elem[j] + elem[k] > sum) {
        k--;
      }
    }

    if (!flag) {
      console.log(-1, -1);
    }
  }
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`3
4 9
2 7 11 15
5 10
1 2 3 5 5
2 100
48 49`);
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
