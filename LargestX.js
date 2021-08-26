function runProgram(input) {
  var input = input.trim().split(/[\n\r]+/);
  console.log(input);

  var test=+input[0]
  console.log(test);

  var count = 0
  for(var K=0,line=1;K<test;K++){
      var num=+input[line++]
      var elem=input[line++].trim().split(" ").map(Number)
      console.log(num,elem)
  }
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`2
5
2 1 -1 -2 3
5
-3 2 -4 4 -2`);
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
