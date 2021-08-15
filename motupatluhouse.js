function runProgram(input) {
  var input = input.trim().split(" ").map(Number);
//   console.log(input)

  if(input%5==1){
      console.log(Math.floor(input/5)+1)
  }else{
      console.log(Math.ceil(input/5))
  }
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`25`);
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
