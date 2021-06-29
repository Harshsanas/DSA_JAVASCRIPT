function runProgram(input) {
  var input = input.trim().split("\n");
  //   console.log(input);

  var array = [];
  var num1 = Number(input[0]);
  //   console.log(array, num1);

  even = false;

  for (var i = num1; i < input.length; i = i + 2) {
    var temp = input[i].trim().split(" ").map(Number);
    array.push(temp);
  }
  //   console.log(array);

  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j <= array[i].length - 3; j++) {
      //   console.log(array[i][j]);

      if (
        array[i][j] % 2 == 0 &&
        array[i][j + 1] % 2 == 0 &&
        array[i][j + 2] == 0
      ) {
        even = true;
      }
    }
    if ((even = true)) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`2
3
1 2 3
5
1 2 4 6 8`);
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
