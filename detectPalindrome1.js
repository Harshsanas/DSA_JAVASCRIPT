function runProgram(input) {
  var input = input.trim().split("\n");
    console.log(input);

    var test=+input[0]
    console.log(test)
for (let x = 0, line = 1; x < test; x++) {
  let num = +input[line++];
  let str = input[line++].trim();
  //console.log(num, str);
  let object = {};
  for (key of str) {
    object[key] == undefined ? (object[key] = 1) : object[key]++;
  }
  let count = 0;
  for (key in object) {
    if (object[key] % 2 == 1) {
      count++;
    }
  }
  console.log(count <= 1 ? "Possible!" : "Not Possible!");
}
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`2
6
aabbcc
5
aabcd`);
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
