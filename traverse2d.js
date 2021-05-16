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
  for (let i = 0; i < cols; i++) {
    for (let j = rows - 1; j >= 0; j--) {
      ans.push(mat[j][i]);
    }
  }
  console.log(ans.join(" "));
}

if (process.env.USERNAME === "prasa") {
  runProgram(`4 3
1 8 9
2 7 10
3 6 11
4 5 12`);
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
