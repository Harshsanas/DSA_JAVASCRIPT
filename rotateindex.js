function runProgram(input) {
  input = input.trim().split("\n");
  var [num, d] = input[0].trim().split(" ").map(Number);
  // console.log(num, d);
  var arr = input[1].trim().split(" ").map(Number);
  // console.log(arr);
  console.log(rotate(arr, d));
}
function rotate(arr, d) {
  for (let i = 0; i < d; i++) {
    arr.push(arr.shift());
  }
  return arr;
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`5 4
1 2 3 4 5`);
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
