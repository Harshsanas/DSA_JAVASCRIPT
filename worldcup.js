function runProgram(input) {
  input = input.trim().split("\n");
  var newZealand = input[0].trim().split(" ");
  var england = input[1].trim().split(" ");
  if (england[0] > newZealand[0]) {
    console.log("England");
  } else if (newZealand[0] > england[0]) {
    console.log("New Zealand");
  } else if (newZealand[0] === england[0]) {
    if (england[1] > newZealand[1]) {
      console.log("England");
    } else if (newZealand[1] > england[1]) {
      console.log("New Zealand");
    } else if (england[1] === newZealand[1]) {
      if (england[2] > newZealand[2]) {
        console.log("England");
      } else console.log("New Zealand");
    }
  }
}

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
