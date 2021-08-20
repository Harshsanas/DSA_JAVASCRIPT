function runProgram(input) {
  var [a,b,c,L,R] = input.trim().split(" ").map(Number);
//   console.log(a,b,c,L,R);

  var mul=1
  while (L <= R) {
    var output = a * (L * L) + b * L + c;
    // console.log(output);
    mul *= output;
    L++;
  }
  console.log(mul)
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`-1 3 8 -2 2`);
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
