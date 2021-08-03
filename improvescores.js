function runProgram(input) {
  var input = input.trim().split(/[\n\r]+/);
//   console.log(input);

  var test = +input[0];
//   console.log(test)

  for(var i=0,line=1;i<test;i++){
      var[N,K]=input[line++].trim().split(" ").map(Number)
      var elem=input[line++].trim().split(" ").map(Number)

    //   console.log(N,K,elem)

      var sum=0
      for(var j=0;j<N;j++){
          sum=sum+elem[j]   
      } 
      if (sum <= K) {
        console.log(sum);
      } else {
        console.log(K);
      }
  }
 
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`2
4 10
1 2 3 4
4 5
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
