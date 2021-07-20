function runProgram(input) {
  var input = input.trim().split(/[\r\n]+/);
    // console.log(input);

    var tests=+input[0]

    for(var i=0,line=1;i<tests;i++){

        var container=Number(input[line++])

        console.log(Profit(container,0))

    }
    
function Profit(container,n) {
  if (container === n) {
    return 1;
  } else if (n > container) {
    return 0;
  } else {
    return Profit(container, n + 4) + Profit(container, n + 8);
  }
}
}


if (process.env.USERNAME === "lenovo") {
  runProgram(`1
12`);
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
