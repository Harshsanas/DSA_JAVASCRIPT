function runProgram(input) {
  var input = input.trim().split(/[\n\r]+/);
  //   console.log(input);

  var num = Number(input[0]);
  var elem = input[1].trim().split(" ").map(Number);

  //   console.log(num, elem);

  elem.sort((a, b) => a - b);

  var sum = 0;
  var min = 0;

  for (var i = 0; i < elem.length; i = i + 2) {
    min = Math.min(elem[i], elem[i + 1]);
    sum = sum + min;
  }

  console.log(sum);
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`2
1 3 1 2`);
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
