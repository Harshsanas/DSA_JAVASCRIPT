function runProgram(input) {
  input = input.trim().split(" ").map(Number);
  
  var m=input.length+1

  var total = m * (m + 1) / 2;

  var sum=0

  for(var i=0; i<input.length; i++) {
    sum+=input[i]
  }
  console.log(total-sum)
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`4 5 1 3`);
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
