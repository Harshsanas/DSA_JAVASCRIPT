function runProgram(input) {
  var input = input.trim().split(/[\n\r]+/);
  //console.log(input);

  var tests = Number(input[0]);
  //   console.log(tests);

  for (var l = 0, line = 1; l < tests; l++) {
    var [N, K] = input[line++].trim().split(" ").map(Number);

    var array = input[line++].trim().split(" ").map(Number);

    // console.log(N, K, array);

    var i = 0;
    var j = N - 1;

    var flag = true;

    array.sort((a, b) => a - b);

    // console.log(array);

    while (i < j) {
      if (array[i] + array[j] === K) {
        console.log(1);
        flag = false;
        break;
      }

      if (array[i] + array[j] < K) {
        i++;
      }
      if (array[i] + array[j] > K) {
        j--;
      }
    }
    if (flag) {
      console.log(-1);
    }
  }
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`1
5 2
3 4 0 2 7`);
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
