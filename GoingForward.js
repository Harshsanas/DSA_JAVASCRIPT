function runProgram(input) {
  input = input.trim().split(/[\n\r]+/);
  let [N, K] = input[0].trim().split(" ").map(Number);
  let elem = input[1].trim().split(" ").map(Number);
  //console.log(elem, N, K);
  let minScore = elem[K - 1];
  let count = 0;
  for (let i = 0; i < N; i++) {
    if (elem[i] >= minScore) {
      count++;
    }
  }
  minScore == 0 ? console.log(0) : console.log(count);
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`8 5
10 9 8 7 7 7 5 5`);
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
