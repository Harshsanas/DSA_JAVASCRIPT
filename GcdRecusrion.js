function runProgram(input) {
  var input = input.trim().split(/[\r\n]+/);
    // console.log(input);

    var tests=+input[0]
    // console.log(tests)

    for(var i=0,line=1;i<tests;i++){
        var [n,m]=input[line++].trim().split(" ").map(Number)
        // console.log(n,m)

        function GCD(n,m){
            if(m==0){
                return n;
            }else{
                return GCD(m,n%m)
            }
        }
        console.log(GCD(n,m));
    }
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`2
6 9
2 25`);
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
