function runProgram(input) {
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  let test = +input[0];
  for (let x = 0, line = 1; x < test; x++) {
    let num = +input[line++];
    let elem = input[line++].trim().split(" ").map(Number);
    //console.log(N, elem);
    let minValue = elem[0];
    let maxValue = elem[0];
    let maxProduct = elem[0];
    for (let i = 1; i < num; i++) {
      if (elem[i] < 0) {
        var temp = maxValue;
        maxValue = minValue;
        minValue = temp;
      }
      maxValue = Math.max(elem[i], maxValue * elem[i]);
      minValue = Math.min(elem[i], minValue * elem[i]);
      maxProduct = Math.max(maxProduct, maxValue);
    }
    console.log(maxProduct);
  }
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`2
3
-3 0 -2
4
4 5 -1 2`);
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
