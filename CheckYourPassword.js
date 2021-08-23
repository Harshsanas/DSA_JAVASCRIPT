function runProgram(input) {
  var input = input.trim().split(/[\n\r]+/);
  //   console.log(input);

  var test = +input[0];
  //   console.log(test);

  for (var k = 0, line = 1; k < test; k++) {
    var count = 0;
    var num = +input[line++];
    var str = input[line++].trim().split("");
    //   console.log(num,str);

    var str1 = [
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

    for (var i = 0; i < str.length; i++) {
      for (var j = 0; j < str1.length; j++) {
        if (str[i] == str1[j]) {
          count++;
        }
      }
    }
    // console.log(count)

    if (count <= num / 2 || count == num) {
      count = 0;
      console.log("Weak");
    } else {
      count = 0;
      console.log("Strong");
    }
  }
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`1
2
c4
`);
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
