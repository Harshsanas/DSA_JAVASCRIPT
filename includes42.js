function runProgram(input) {
  var input = input.trim().split("\n");
  //   console.log(input);
  var num = input[1].trim().split(" ").map(Number);
  //   console.log(num);
  var includes42 = false;
  for (var i = 0; i < num.length; i++) {
    if (num[i] == 42) {
      includes42 = true;
      break;
    } else {
      includes42 = false;
    }
  }
  if (includes42) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

if (process.env.USERNAME === "prasa") {
  runProgram(`5
3 7 0 9 8`);
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
