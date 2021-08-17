function runProgram(input) {
  var input = input.trim().split(/[\r\n]+/);
//   console.log(input);

  let test = +input[0];
  for (let i = 0, line = 1; i < test; i++) {
    let N = input[line++].trim().split(" ").map(Number);
    let elem = input[line++].trim().split(" ").map(Number);
    //console.log(N, elem);
    console.log(encripted(elem));
  }
}
function encripted(elem) {
  let output = [];
  for (let i = 0; i < elem.length / 2; i++) {
    output.push(elem[i]);
    output.push(elem[elem.length - 1 - i]);
  }
  if (elem.length % 2 == 1) {
    output = output.slice(0, -1);
    return output.join(" ");
  } else {
    return output.join(" ");
  }
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`2
5
1 3 5 4 2
6
1 3 5 6 4 2`);
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
