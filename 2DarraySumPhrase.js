function runProgram(input) {
  // TC = O(n^2)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  let [row, col] = input[0].trim().split(" ").map(Number);
  let arr = [];
  for (let k = 1; k <= row; k++) {
    let temp = input[k].trim().split("");
    arr.push(temp);
  }
  //console.log(arr);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i + 3 < row) {
        if (
          arr[i][j] == "s" &&
          arr[i + 1][j] == "a" &&
          arr[i + 2][j] == "b" &&
          arr[i + 3][j] == "a"
        ) {
          count++;
        }
      }
      if (j + 3 < col) {
        if (
          arr[i][j] == "s" &&
          arr[i][j + 1] == "a" &&
          arr[i][j + 2] == "b" &&
          arr[i][j + 3] == "a"
        ) {
          count++;
        }
      }
      if (i + 3 < row && j + 3 < col) {
        if (
          arr[i][j] == "s" &&
          arr[i + 1][j + 1] == "a" &&
          arr[i + 2][j + 2] == "b" &&
          arr[i + 3][j + 3] == "a"
        ) {
          count++;
        }
      }
      if (i > 2 && j + 3 < col) {
        if (
          arr[i][j] == "s" &&
          arr[i - 1][j + 1] == "a" &&
          arr[i - 2][j + 2] == "b" &&
          arr[i - 3][j + 3] == "a"
        ) {
          count++;
        }
      }
    }
  }
  console.log(count);
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`5 5
safer
amjad
babol
aaron
songs`);
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
