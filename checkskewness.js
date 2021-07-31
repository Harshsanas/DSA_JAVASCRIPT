function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let test = +input[0];
  for (let i = 1; i <= test; i++) {
    let num = +input[i];
    // console.log(num)
    let odd = 0;
    let even = 0;
    if (num % 2 != 0) {
      console.log("Odd Skewed");
    } else {
      for (let j = 1; j <= num; j++) {
        if (num % j == 0) {
          if (j % 2 == 0) {
            even += 1;
          } else {
            odd += 1;
          }
        }
      }
      // console.log(odd, even)
      even === odd
        ? console.log("Not Skewed")
        : even > 0
        console.log("Even Skewed")
    }
  }
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`3
    4
    6
    11`);
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
