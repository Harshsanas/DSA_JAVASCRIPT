function runProgram(input) {
  var input = input.trim().split(/[\r\n]+/);
  // console.log(input);

  var test = input[0];
  // console.log(test)

  for (var i = 0, line = 1; i < test; i++) {
    num = +input[line++];
    elem = input[line++].trim().split(" ").map(Number);
    caseNum = +input[line++];
    console.log(num, elem, caseNum);
  }
  let even = [];
  let odd = [];
  for (var m = 0; m < num; m++) {
    if (elem[m] % 2 == 0) {
      even.push(elem[m]);
    } else {
      odd.push(elem[m]);
    }
  }
  even = even.sort((a, b) => a - b);
  odd = odd.sort((a, b) => a - b);
  console.log(even)
  console.log(odd);
  if (caseNum == 1) {
      even.concat(odd);
    console.log(even.join(" "));
  } else {
    odd.concat(even)
    console.log(odd.join(" "));
  }
}


if (process.env.USERNAME === "lenovo") {
  runProgram(`2
6
1 3 5 2 7 4
1
6 
1 3 5 2 7 4
2`);
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
