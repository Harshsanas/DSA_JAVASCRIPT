function runProgram(input) {
  var input = input.trim().split("");
  var number1 = "";
  for (var i = 0; i < input.length; i++) {
    number1 = false;
    if (input[i] == "4" || input[i] == "7") {
      number1 = true;
    } else {
      number1 = false;
      break;
    }
    // console.log(number1);
    // console.log(input);
  }
  var random = input.join("");
  //   console.log(random);
  random = Number(random);
  //   console.log(random);
  if (random % 4 == 0 || random % 7 == 0) {
    number1 = true;
  }
  if (number1 == true) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

if (process.env.USERNAME === "prasa") {
  runProgram(`78`);
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
