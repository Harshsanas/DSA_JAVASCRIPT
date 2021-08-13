function runProgram(input) {
  
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  let test = +input[0];
  for (let k = 0, line = 1; k < test; k++) {
    let [N] = input[line++].trim().split(" ").map(Number);
    let elem = input[line++].trim().split(" ").map(Number);
    //console.log(N, elem);
    elem.sort((a, b) => a - b);
    let repeated = 0;
    let output = 0;
    for (let i = 0; i < N; i++) {
      if (elem[i] == elem[i + 1]) {
        repeated = elem[i];
      }
      output += elem[i];
    }
    let sum = (N * (N + 1)) / 2;
    // console.log({ sum, output, repeated });
    let missing = sum - (output - repeated);
    console.log(missing, repeated);
  }
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`
  3
  5
  1 2 3 3 4
  2
  1 1
  3
  1 2 2
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
