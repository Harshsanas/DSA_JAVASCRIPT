function runProgram(input) {
  var input = input.trim().split(/[\n\r]+/);
    // console.log(input);

    var num = +input[0];
    var elem = input[1].trim().split(" ").map(Number);
    // console.log(num,elem)

    var output = "";
    for (var i = 0; i < num; i++) {
      if (elem[i] != elem[i + 1]) {
        output =output+ elem[i] + " ";
      }
    }
    console.log(output);
  
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`5
2 2 2 7 9
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
