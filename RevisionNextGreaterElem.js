function runProgram(input) {
  var input = input.trim().split("\n");
    // console.log(input);

    var test=+input[0];
    // console.log(test);

    for(var i=0,line=1; i<test; i++) {
        var num=+input[line++]
        var elem=input[line++].trim().split(" ").map(Number)

        console.log(num,elem);
        var output=[]
        var stack=[]
        output[0]=-1

        stack.push(elem[elem.length-1])
        console.log(stack)

        for(var j=num.length - 1; j >= 0; j--){
          while(stack.length !== 0 && stack[stack.length - 1]<=elem[j]){
            stack.pop()
          }
          
        }
        console.log(output.join(" "))
    }
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`1
4
1 3 2 4`);
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
