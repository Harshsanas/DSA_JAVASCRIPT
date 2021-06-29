function runProgram(input) {
  var input = input.trim().split(/[\n\r]+/);

  var elem = input[1].trim().split(" ").map(Number);
  //   console.log(elem);

  for (var i = 0; i < elem.length - 1; i++) {
    for (var j = 0; j < elem.length - i - 1; j++) {
      if (elem[j] > elem[j + 1]) {
        var temp = elem[j];
        elem[j] = elem[j + 1];
        elem[j + 1] = temp;
      }
    }
  }
  console.log(...elem);
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`5
3 5 0 9 8`);
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
