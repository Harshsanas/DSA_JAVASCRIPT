function runProgram(input) {
  var input = input.trim().split("\n");
  // console.log(input);

  var test=+input[0]
  for(var i=0,line=1;i<test;i++){
    var num=+input[line++]
    console.log(isPrime(num))
  }
  function isPrime(num){
    if(num === 1){
      return "No"
    }else if(num === 2){
      return "Yes"
    }else{
      for(var i=2;i<num;i++){
        if(num%i===0){
          return "No"
        }
      }
      return "Yes"
    }
  }
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`4
1
2
3
4`);
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
