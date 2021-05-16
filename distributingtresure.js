function runProgram(input) {
  var input = input.trim().split("\n");
  //   console.log(input);
  var test = Number(input[0]);
  // console.log(test);

  for (var i = 1; i <= test; i++) {
    var array = input[1].trim().split(" ").map(Number);
    // console.log(array);

    var sum = array.reduce((el, em) => {
      return el + em;
    });
    // console.log(sum);

    var coins = sum / 3;
    var a = array[0];
    var b = array[1];
    var c = array[2];

    if (sum % 3 == 0 && a <= coins && b <= coins && c <= coins) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
}
if (process.env.USERNAME === "prasa") {
  runProgram(`4
5 3 1 9 
100 101 102 105 
10 20 15 14 
101 101 101 3`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = " ";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
  });

  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
