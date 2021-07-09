function runProgram(input) {
  var input = input.trim().split(/[\r\n]+/);
  console.log(input)
  var tests=+input[0]
  console.log(tests)

  for(var i=0,line=1;i<tests;i++){
      var num=input[line++].trim().split("").map(Number);
      var elem=input[line++].trim().split(" ").map(Number)

      function SumRecursion(elem,num){
          if(num==2){
              return Math.abs(elem[0]-elem[1])
          }else{
              return Math.abs(elem[num-1]-elem[num-2]+SumRecursion(elem,num-1))
          }
      }
  }
  console.log(SumRecursion(elem,num))
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`2
3
1 5 2
5
3 5 6 1 8`);
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
