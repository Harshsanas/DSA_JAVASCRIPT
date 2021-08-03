function runProgram(input) {
  var input = input.trim().split(/[\n\r]+/);
//   console.log(input);

  var test=+input[0]
//   console.log(test)

  for(var i=0,line=1;i<test;i++){
      var N=input[line++].trim().split("").map(Number)
      var elem=input[line++].trim().split(" ").map(Number)
      console.log(N,elem)
  }
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`2
6
1 1 1 1 2 3
5
1 1 2 2 3`);
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
