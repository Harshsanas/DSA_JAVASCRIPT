function runProgram(input) {
  var input = input.trim().split(/[\n\r]+/);
//   console.log(input);

  var test=+input[0];
//   console.log(test);

  for(var i=0,line=1;i<test;i++) {
      var int=+input[line++]
    //   console.log(int)

    for(var j=0;j<int;j++){
        if(j*j===int){
            console.log(int)
        }
    }
  }
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`2
4
8`);
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
