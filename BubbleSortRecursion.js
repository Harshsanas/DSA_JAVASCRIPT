function runProgram(input) {
  var input = input.trim().split(/[\r\n]+/);
//   console.log(input)

  var num=+input[0]
  var elem=input[1].trim().split(" ").map(Number)

  console.log(RecursionBubble(elem, num).join(" "));

}
function RecursionBubble(elem, num) {
  if (num == 1) {
    return elem;
  }
  for (var i = 0; i < num - 1; i++) {
    if (elem[i] > elem[i + 1]) {
      var temp = elem[i];
      elem[i] = elem[i + 1];
      elem[i + 1] = temp;
    }
  }
  return RecursionBubble(elem, num - 1);
} 
if (process.env.USERNAME === "lenovo") {
  runProgram(`5
3 5 0 9 8`);
}else {
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
