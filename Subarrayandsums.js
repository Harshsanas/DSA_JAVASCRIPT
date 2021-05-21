function runProgram(input) {
  var input = input.trim().split(/[\n\r]+/);
  console.log(input);

  let [total, sum] = input[0].trim().split(" ").map(Number);
  let array = input[1].trim().split(" ").map(Number);
  console.log(total, sum, array);

  var totalsum = array[0];
  var a = 0;
  var flag = true;
  var count = 0;

  for (var i = 1; i <= total; i++) {
    while (totalsum > sum && a <= i - 1) {
      totalsum = totalsum - array[a];
      a++;
    }

    if (totalsum == sum) {
      count++;
      console.log(count);
      flag = false;
      break;
    }
    if (totalsum < sum) {
      totalsum = totalsum + array[i];
    }
  }
}

if (process.env.USERNAME === "prasa") {
  runProgram(`4 3
2 3 4 6`);
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
