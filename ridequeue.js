function runProgram(input) {
  var input = input.trim().split(/[\n\r]+/);
//   console.log(input);

  var test=+input[0]
  

  for(var i=0,line=1;i<test;i++){
    var num=input[line++].trim().split(" ").map(Number);
    var elem = input[line++].trim().split(" ").map(Number);
    // console.log(num,elem)
    var count = 1;
    for (var j = 0; j < num; j++) {
      if (elem[j] >= elem[j + 1]) {
        count++;
      }
    }
    console.log(count);
  }
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`1
8
1 3 2 4 4 5 3 6`);
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
