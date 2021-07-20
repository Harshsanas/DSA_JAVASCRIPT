function runProgram(input) {
  input = input.trim().split(/[\n\r]+/);
  const str = input[0].trim();
  const k = +input[1].trim();
  const high = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const low = "abcdefghijklmnopqrstuvwxyz".split("");
  const num = "0123456789".split("");
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    // console.log(high.indexOf(str[i]));
    if (high.indexOf(str[i]) > -1) {
      let index = high.indexOf(str[i]) + k;
      if (index > 25) {
        index = index % 26;
      }
      newStr += high[index];
    } else if (low.indexOf(str[i]) > -1) {
      let index = low.indexOf(str[i]) + k;
      if (index > 25) {
        index = index % 26;
      }
      newStr += low[index];
    } else if (num.indexOf(str[i]) > -1) {
      //   console.log(num.indexOf(str[i]) + k);
      let index = num.indexOf(str[i]) + k;
      if (index > 9) {
        index = index % 10;
      }
      //   console.log(index);
      newStr += num[index];
    } else {
      newStr += str[i];
    }
  }
  console.log(newStr);
}
if (process.env.USERNAME === "dell") {
  runProgram(`a
  100`);
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
