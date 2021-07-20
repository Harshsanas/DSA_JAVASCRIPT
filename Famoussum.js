function runProgram(input) {
  var [n,k]=input.trim().split(" ").map(Number);
//   console.log(n,k)

  function Sum(elem){
      if(elem==0){
          return 0
      }else{
          return elem%k===0?9:elem%n
      }
  }

  console.log(Sum(n))

  function superDigit(){}

}



if (process.env.USERNAME === "lenovo") {
  runProgram(`148 3`);
  
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
