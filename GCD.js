function runProgram(input) {
  var input = input.trim().split(" ").map(Number);
  //   console.log(input);

  var gcd;
  gcd = function (n, m) {
    if (m == 0) {
      return n;
    }
    return gcd(m, n % m);
  };

  console.log(gcd(input[0], input[1]));
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`51 68`);
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
