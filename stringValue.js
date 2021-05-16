function runProgram(input) {
  var aphabet_letter = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var input = input.trim().split("");
  var temp = 0;

  for (var i = 0; i < aphabet_letter.length; i++) {
    for (var j = 0; j < input.length; j++) {
      if (input[j] == aphabet_letter[i]) {
        temp = temp + i + 1;
      }
    }
  }
  console.log(temp);
}

if (process.env.USERNAME === "prasa") {
  runProgram(`aba`);
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
