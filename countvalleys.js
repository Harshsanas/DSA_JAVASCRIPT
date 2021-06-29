function runProgram(input) {
  var input = input.trim().split("\n");
  // console.log(input);
  var num = input[0].trim().split(" ");
  // console.log(num);
  var time = num[1].trim().split("").map(Number);
  // console.log(time);
  var elem = input[1].trim().split(" ").map(Number);
  // console.log(elem);
  var temp = [];
  for (var i = elem.length - time; i < elem.length; i++) {
    temp.push(elem[i]);
    // console.log(temp);
  }
  for (var j = 0; j < elem.length; j++) {
    temp.push(elem[j]);
  }

  console.log(temp);
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`8
UDDDUDUU`);
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
