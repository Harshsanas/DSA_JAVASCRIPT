function runProgram(input) {
  input = input.trim().split(/[\r\n]+/);
  arr = [];
  for (var i = 0; i < input.length; i++) {
    temp = input[i].trim().split(" ");
    arr.push(temp);
  }
  //console.log(arr);
  let count = 0;
  for (var i = 0; i < 3; i++) {
    if (arr[0][i] === arr[1][i] && arr[1][i] === arr[2][i]) {
      console.log(arr[0][i]);
      count++;
      break;
    }
    if (arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2]) {
      console.log(arr[i][0]);
      count++;
      break;
    }
    if (arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]) {
      console.log(arr[0][0]);
      count++;
      break;
    }
    if (arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0]) {
      console.log(arr[0][2]);
      count++;
      break;
    }
  }
  if (count === 0) {
    console.log("Tie");
  }
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`
  x x o
  o x x
  o o o
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
