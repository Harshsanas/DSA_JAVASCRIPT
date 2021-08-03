
function runProgram(input) {
  var input = input.trim().split(/[\n\r]+/);
  // console.log(input);
 for (let i = 0; i < input.length; i++) {
    input[i] = input[i].trim().split(" ").map(Number);
  }
  //console.log(input);
  let elem = input[1];
  let test = +input[2];
  let sum = 0;
  for (let i = 0, line = 3; i < test; i++) {
    let [L, R] = input[line++];
    sum = 0;
    for (let j = L - 1; j < R; j++) {
      sum = sum + elem[j];
    }
    console.log(sum);
}
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`4
3 2 1 5
4
1 3
2 4
1 4
3 3`);
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
