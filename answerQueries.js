function runProgram(input) {
  var input = input.trim().split(/[\r\n]+/);
  //console.log(input);

  var num = +input[0];
  var elem = input[1].trim().split(" ").map(Number);
  var q = +input[2];
  var qElem = input[3].trim().split(" ").map(Number);

  // console.log(num,elem,q,qElem)


  for (var i = 0; i < q; i++) {
    if (elem.includes(qElem[i])) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`5
1 2 3 4 5
3
3 5 7`);
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
