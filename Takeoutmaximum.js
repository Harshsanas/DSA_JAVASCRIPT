function runProgram(input) {
  input = input.trim().split(/[\n\r]+/);
  let [num, sum] = input[0].trim().split(" ").map(Number);
  let elements = input[1].trim().split(" ").map(Number);

  let total = 0;
  for (let i = 0; i < sum; i++) {
    total = total + elements[i];
  }
  let res = total;
  for (let i = sum; i < num; i++) {
    total = total + elements[i] - elements[i - sum];
    res = Math.max(res, total);
  }
  console.log(res);
}
if (process.env.USERNAME === "prasa") {
  runProgram(`10 3
-1 -1 -2 1 -2 4 1 9 3 9`);
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
