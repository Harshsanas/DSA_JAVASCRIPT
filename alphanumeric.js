function runProgram(input) {
  var input = input.trim().split(/[\r\n]+/);
  //   console.log(input);

  var test = Number(input[0]);
  //   console.log(test);

  var index = 1;
  for (var i = 0; i < test; i++) {
    var num = Number(input[index].trim().split(""));
    // console.log(num);
    index++;

    var array = input[index].trim().split("");
    // console.log(array);
    index++;

    var total = 0;
    // console.log(total);

    for (var j = 0; j < array.length; j++) {
      //   console.log(array[j]);

      if (Number(array[j]) % Number(array[j]) == 0) {
        total++;
      }
    }
    console.log(total);
  }
}
if (process.env.USERNAME === "prasa") {
  runProgram(`2
5
a123b
5
1abc7`);
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
