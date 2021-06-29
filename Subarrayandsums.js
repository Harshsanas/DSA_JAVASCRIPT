function runProgram(input) {
  var input = input.trim().split(/[\n\r]+/);
  console.log(input);

  let [total, sum] = input[0].trim().split(" ").map(Number);
  let array = input[1].trim().split(" ").map(Number);
  console.log(total, sum, array);

  var count = 0;

  for (var i = 0; i < total; i++) {
    count = count + array[i];
  }
  console.log(count);

  if (count % sum !== 0) {
    console.log(1);
    return;
  }

  var n = total - 1;
  var num = array[0];

  while (n > 0) {
    var a = 0;
    var b = 0;

    for (var i = 0; i < n; i++) {
      a = a + array[i];
    }
    if (a % sum !== 0) {
      num++;
    }

    for (var j = sum; j < total; j++) {
      a = a + array[j] - array[j - sum];
    }

    if (a % sum !== 0) {
      num++;
      console.log(num);
      return;
    }
    if (num > 0) {
      console.log(num);
      return;
    }
    sum--;
  }
}

if (process.env.USERNAME === "lenovo") {
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
