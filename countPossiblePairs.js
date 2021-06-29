function runProgram(input) {
  var input = input.trim().split(" ").map(Number);
  console.log(input);

  var num1 = input[0];
  var num2 = input[1];
  console.log(num1, num2);

  var count = 0;

  for (var i = 0; i <= num1; i++) {
    for (var j = 0; j <= num2; j++) {
      if (i ** 2 + j == num1 && j ** 2 + i == num2) {
        count = count + 1;
      }
    }
  }
  console.log(count);
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`9 3`);
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
