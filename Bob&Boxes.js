function runProgram(input) {
  var input = input.trim().split(/[\r\n]+/).map(Number);
    // console.log(input);
    
    console.log(BobBoxex(input));

}
function BobBoxex(n) {
    if (n < 0) {
        return 0;
    }
    if (n == 0) {
        return 1;
    } else {
        return BobBoxex(n - 1) + BobBoxex(n - 3) + BobBoxex(n - 5); // 6+4+2
    }
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`7`);
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
