function runProgram(input) {
  input = input.trim().split(/[\n\r]+/);
  let [num, sum] = input[0].trim().split(" ").map(Number);
  let elem = input[1].trim();
  var count = 0;

  function Distinct(substring, k) {
    for (let i = 0; i < k; i++) {
      for (let j = i + 1; j < sum; j++) {
        if (substring[i] == substring[j]) {
          return 0;
        }
      }
    }
    return 1;
  }
  for (let i = 0; i < num - sum; i++) {
    var substring = elem.slice(i, i + sum);
    if (Distinct(substring, sum)) {
      count++;
    }
  }
  console.log(count);
}

if (process.env.USERNAME === "prasa") {
  runProgram(`4 2
abcc`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  var read = "";
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
