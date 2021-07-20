function runProgram(input) {
  var input = input.trim().split(/[\r\n]+/);
//   console.log(input);
  var tests = +input[0];
//   console.log(tests);

  for(var i=0,line=1;i<tests;i++){
      var num=+input[line++]
      var elem = input[line++].trim().split(" ").map(Number);  


      console.log(recursionSum(elem, num));

    function recursionSum(elem,num){
        if (num == 1) {
          return 0;
        } else {
          return Math.abs(
            elem[num - 1] - elem[num - 2]) + recursionSum(elem, num - 1)
          ;
        }
    }
  }
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
