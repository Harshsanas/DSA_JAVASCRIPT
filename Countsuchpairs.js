function runProgram(input) {
  var input = input.trim().split(/[\n\r]+/);
    // console.log(input);

    var [num,sum]=input[0].trim().split(" ").map(Number)
    // console.log(num,sum);

    var elem = input[1].trim().split(" ").map(Number)
    // console.log(elem);

    var count=0

    for(var i=0;i<elem.length;i++) {
      for (var j =i;j<elem.length;j++) {
        if(elem[i]+elem[j+1]==sum){
            count++
        }
      }
    }
    console.log(count)
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`5 9
3 0 6 2 7`); 
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
