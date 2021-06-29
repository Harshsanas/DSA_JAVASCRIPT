function runProgram(input) {
  var input = input.trim().split(/[\n\r]+/);
  //   console.log(input);

  var [num, sum] = input[0].trim().split(" ").map(Number);
  var elem = input[1].trim().split(" ").map(Number);

  //   console.log(num, sum, elem);

  var temp = 0;
  for (var i = 0; i < elem.length; i++) {
    for (var j = 0; j < elem.length - i - 1; j++) {
      if (elem[j] % sum > elem[j + 1] % sum) {
        temp = elem[j];
        elem[j] = elem[j + 1];
        elem[j + 1] = temp;
      }
    }
  }
  console.log(...elem);
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`5 6
12 18 17 65 46`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  var read = "";
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
