
function runProgram(input) {
  input = input.trim().split(/[\r\n]+/);
  var [row, col, target] = input[0].trim().split(" ").map(Number);
  // console.log(row, col, target);
  var arr = [];
  for (var i = 1; i < input.length; i++) {
    temp = input[i].trim().split(" ").map(Number);
    arr.push(temp);
  }
  // console.log(arr);
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      //console.log(arr[i][j]);
      if (j < col - 2) {
        if (arr[i][j] + arr[i][j + 1] + arr[i][j + 2] == target) {
          count++;
        }
      }
      if (i < row - 2) {
        if (arr[i][j] + arr[i + 1][j] + arr[i + 2][j] == target) {
          count++;
        }
      }
      if (i < row - 2 && j < col - 2) {
        if (arr[i][j] + arr[i + 1][j + 1] + arr[i + 2][j + 2] == target) {
          count++;
        }
      }
      if (i > 1 && j < col - 2) {
        if (arr[i][j] + arr[i - 1][j + 1] + arr[i - 2][j + 2] == target) {
          count++;
        }
      }
    }
  }
  console.log(count);
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`
  3 3 6
  3 2 1
  2 2 2
  1 5 1
    `);
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