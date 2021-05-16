function runProgram(input) {
  var input = input.trim().split("\n");
  //   console.log(input);
  var array = input[1].trim().split(" ").map(Number);
  //   console.log(array);
  var str = "";
  for (var i = 0; i < array.length; i++) {
    if (array[i] <= 0) {
      str = str + "0";
      //   console.log("0");
    } else {
      //   console.log(array[i].toString());
      str = str + array[i].toString();
    }
  }
  console.log(str);
}

if (process.env.USERNAME === "prasa") {
  runProgram(`5
2 -4 6 8 -9`);
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
