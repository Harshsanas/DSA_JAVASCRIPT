function runProgram(input) {
  var input = input.trim().split(/[\n\r]+/);
//   console.log(input);

  var num=+input[0]
  var elem=input[1].trim().split(" ").map(Number)
//   console.log(num,elem)

  var output=0
  for(var i=0;i<num;i++){
      output++;

      for(var j=i+1;j<num;j++){
          if(elem[i]<=elem[j]){
              output++
          }else{
              break
          }
      }
  }
  console.log(output)
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`3
3 2 1`);
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
