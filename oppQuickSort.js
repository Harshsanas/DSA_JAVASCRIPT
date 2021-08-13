function runProgram(input) {
  var input = input.trim().split("\n");
    // console.log(input);

    var num=+input[0]
    var elem=input[1].trim().split(" ").map(Number);

    var array=[]

    for(var i=0;i<elem.length;i++) {
      
    }
    console.log(array)
    
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`5
2 3 1 4 5`);
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
