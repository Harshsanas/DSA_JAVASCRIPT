function runProgram(input) {
  var input = input.trim().split(" ").map(Number);
//   console.log(input);

for(var i=1;i<=input;i++){
    var star=""
    for(var j=1;j<=i;j++){
        star+="*"
    }
    console.log(star)
}
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`2`);
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
