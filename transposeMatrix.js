function runProgram(input) {
  var input = input.trim().split(/[\r\n]/);
  console.log(input);
  var [rows, cols] = input[0].trim().split(" ").map(Number);
  console.log(rows, cols);

  var mat = [];
  for (var i = 1; i <= rows; i++) {
    mat.push(input[i].trim().split(" ").map(Number));
  }
  console.log(mat);
  pattern(mat, rows, cols, []);
}

function pattern(mat, rows, cols, ans) {
  for (let i = cols - 1; i >= 0; i--) {
    for (let j = 0; j < rows; j++) {
      ans.push(mat[j][i]);
    }
  }
  console.log(ans.join(""));
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`5 4
0 0 0 0
1 1 1 1
2 2 2 2
3 3 3 3
4 4 4 4`);
} else {
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
}
