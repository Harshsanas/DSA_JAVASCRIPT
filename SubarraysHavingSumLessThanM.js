function runProgram(input) {
  var input = input.trim().split(/[\n\r]+/);
    // console.log(input);

    var test=+input[0]
    // console.log(test);

    var count = 0
    for(var i=0,line=1;i<test;i++){
        var [N,M]=input[line++].trim().split(" ").map(Number)
        var elem=input[line++].trim().split(" ").map(Number)
        // console.log(N,M,elem)

        for(var j=0;j<elem.length;j++){
          for(var k=j;k<elem.length;k++){
            if(elem[j]+elem[k+1]<M){
              count++
            }
          }
        }
      console.log(count);
    
    }
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`1
5 5
1 5 1 3 2`);
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
