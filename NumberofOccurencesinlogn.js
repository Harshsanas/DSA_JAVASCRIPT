function runProgram(input) {
  input = input.trim().split(/[\n\r]+/);
  // console.log(input)

  var [num,K]=input[0].trim().split(" ").map(Number)
  var elem=input[1].trim().split(" ").map(Number)

  // console.log(num,K)
  // console.log(elem)

  var count=0

  for(var i=0; i<elem.length; i++) {
    if(elem[i]==K){
      count++
    }
  }
  console.log(count)
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`6 3
2 3 3 3 6 9`);
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
