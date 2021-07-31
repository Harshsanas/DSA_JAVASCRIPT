function runProgram(input) {
  var input = input.trim().split(/[\r\n]+/);
//   console.log(input);

  var test=+input[0]
//   console.log(test)

  for(var i=0,line=1;i<test;i++){
      var num=+input[line++].trim();
      var elem=input[line++].trim().split(" ").map(Number)
      console.log(num,elem)

      
  }
}


if (process.env.USERNAME === "lenovo") {
  runProgram(`3
3
1 2 3
6
1 2 3 1 2 3
6
1 1 1 1 1 1`);
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
