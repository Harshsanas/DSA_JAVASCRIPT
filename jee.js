function runProgram(input) {
  input = input.trim().split("\n");
  var first = input[0].trim().split(" ").map(Number);
  // console.log(first);
  var second = input[1].trim().split(" ").map(Number);
  // console.log(second);
  var total_f = first[0] + first[1] + first[2];
  // console.log(total_f);
  var total_s = second[0] + second[1] + second[2];
  console.log(total_s);
  if (total_f > total_s) {
    console.log("First");
  } else if (total_s > total_f) {
    console.log("Second");
  } else if (total_f === total_s) {
    if (first[2] > second[2]) {
      console.log("First");
    } else if (second[2] > first[2]) {
      console.log("Second");
    } else if (first[2] === second[2]) {
      if (first[0] > second[0]) {
        console.log("First");
      } else console.log("Second");
    }
  }
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`120 90 70
90 80 110
`);
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
