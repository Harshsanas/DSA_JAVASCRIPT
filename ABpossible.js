function runProgram(input) {
  var input = input.trim().split(/[\r\n]+/);
  console.log(input);

  var test=+input[0]
  console.log(test)

  for(var i=0,line=1;i<test;i++){
      var [A,B]=input[line++].trim().split(" ").map(Number);
      console.log(A, B);

      
  }

  function append(a,b){
      if(a>b){
          return false
      }if(a===b){
          return true
      }
  }
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`4
6 242
3 3
6 3
10 30`);
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
