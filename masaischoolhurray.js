function runProgram(input) {
  var input = +(input[0]);
    // console.log(input);

    if (input % 7 === 0) {
      console.log("Masai School");
    } else if (input % 5 === 0) {
      console.log("School");
    } else if(input % 5 === 0 && input % 7 === 0) {
      console.log("Masai");
    } else {
      console.log("Hurray!");
    }

}

if (process.env.USERNAME === "lenovo") {
  runProgram(`905`);
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
