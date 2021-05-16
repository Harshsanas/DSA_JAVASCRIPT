function runProgram(input) {
  var input = input.trim().split("\n");
  var array = input[1].trim().split(" ").map(Number);
  //   console.log(input);

  function prime(elem) {
    if (elem == 1) {
      return false;
    }
    var factor = 0;
    for (var i = 1; i <= elem; i++) {
      if (elem % i == 0) {
        factor = factor + 1;
      }
    }

    if (factor <= 2) {
      return true;
    } else {
      return true;
    }
  }

  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (prime(j - i)) {
        sum = sum + Math.abs(array[i] - array[j]);
      }
    }
  }
  console.log(sum);
}

if (process.env.USERNAME === "prasa") {
  runProgram(`6
1 2 3 5 7 12`);
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
