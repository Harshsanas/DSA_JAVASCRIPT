function runProgram(input) {
  var input = input.trim().split(/[\r\n]+/);
//   console.log(input);

  var num=+input[0]
  var elem=input[1].trim().split(" ").map(Number)
//   console.log(num,elem)

  var even=0
  var odd=0

  for(var i=0;i<elem.length;i++){
      if(elem[i]%2==0){
          even=even+elem[i]
      }else{
          odd=odd+elem[i]
      }
  }
//   console.log(even,odd)

  if(even<odd){
      console.log("Odd")
  }else{
      console.log("Even")
  }
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`4
1 2 3 4`);
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
