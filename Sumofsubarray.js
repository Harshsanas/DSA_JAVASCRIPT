function runProgram(input) {
  var input = input.trim().split(/[\n\r]+/);
  //   console.log(input);
  tests = Number(input[0]);
  //   console.log(tests);

  for (var i = 0, line = 1; i < tests; i++) {
    var [num, sum] = input[line++].trim().split(" ").map(Number);

    var array = input[line++].trim().split(" ").map(Number);

    // console.log(num, sum, array);

    var count = 0;
    var flag = true;
    var total = array[0];

    for (var j = 1; j <= num; j++) {
      while (total > sum && count <= j - 1) {
        total -= array[count];
        count++;
      }

      if (total == sum) {
        console.log("Yes");
        flag = false;
        break;
      }

      if (total < sum) {
        total = total + array[j];
      }
    }
    if (flag) {
      console.log("No");
    }
  }
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`3
5 3
1 2 1 3 4
4 5
1 2 1 3
3 2
1 2 1`);
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
