function runProgram(input) {
  var input = input.trim().split(/[\r\n]+/);
//   console.log(input);

  var tests = +input[0];
//   console.log(tests);

  for (var i = 0, line = 1; i < tests; i++) {
    var [row, col] = input[line++].trim().split(" ").map(Number);

    var arr = [];

    for (var j = 0; j < row; j++) {
      arr.push(input[line++]);
    }
    counting(row, col, arr);
  }

  
function counting(row, col, arr) {
  let count = 0;
  for (var i = 0; i < row; i++) {
    for (var j = 0; j < col - 2; j++) {
      if (arr[i][j] === "i" && arr[i][j + 1] === "s" && arr[i][j + 2] === "a") {
        count++;
      }
    }
  }

  for (var i = 0; i < col; i++) {
    for (var j = 0; j < row - 2; j++) {
      if (arr[j][i] === "i" && arr[j + 1][i] === "s" && arr[j + 2][i] === "a") {
        count++;
      }
    }
  }

  console.log(count);
}

}

if (process.env.USERNAME === "lenovo") {
  runProgram(`2
3 3
isa
sia
ais
5 3
isa
sia
ais
ssa
aai`);
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
