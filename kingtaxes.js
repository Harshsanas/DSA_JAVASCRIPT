function runProgram(input) {
  input = input.trim().split(/[\n\r]+/);
  //   console.log(input);

  var array = input[1].trim().split(" ").map(Number);
  //   console.log(array);

  var count = 0;

  array.sort((a, b) => a - b);
  //   console.log(array);

  var i = 0;
  var j = array.length - 1;
  while (i < j) {
    count = count + array[j];
    i++;
    j--;
  }
  console.log(count);
}
if (process.env.USERNAME === "prasa") {
  runProgram(`2
1 3 1 2`);
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
