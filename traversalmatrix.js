function runProgram(input) {
  var input = input.trim().split(/[\n\r]+/);
  //   console.log(input);

  var test = Number(input[0].trim());
  //   console.log(test);

  for (let i = 0, line = 1; i < test; i++) {
    var [row, col] = input[line++].trim().split(" ");

    let mat = [];

    for (let j = 0; j < row; j++) {
      mat.push(input[line++].trim().split(" "));
    }
    // console.log(row, col);
    // console.log(mat);

    var left = 0;
    var right = col - 1;
    var top = 0;
    var bottom = row - 1;
    var matrix = [];
    var count = 0;

    while (left <= right && top <= bottom) {
      for (let i = top; i <= bottom && count < row * col; i++) {
        matrix.push(mat[i][left]);
        count++;
      }
      left++;
      for (let i = left; i <= right && count < row * col; i++) {
        matrix.push(mat[bottom][i]);
        count++;
      }
      bottom--;
      for (let i = bottom; i >= top && count < row * col; i--) {
        matrix.push(mat[i][right]);
        count++;
      }
      right--;
      for (let i = right; i >= left && count < row * col; i--) {
        matrix.push(mat[top][i]);
        count++;
      }
      top++;
    }
    console.log(...matrix);
  }
}

if (process.env.USERNAME === "prasa") {
  runProgram(`2
3 4
1 2 3 4
5 6 7 8
9 10 11 12
4 3
1 2 3
4 5 6
7 8 9
10 11 12`);
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
