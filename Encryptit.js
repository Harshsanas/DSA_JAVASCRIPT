function runProgram(input) {
  var input = input.trim().split("\n");
    console.log(input);

    var num=+input[1]
    var text=input[0].trim().split("")
    console.log(num,text);

}

if (process.env.USERNAME === "lenovo") {
  runProgram(`All-convoYs-9-be:Alert1.
4`);
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
