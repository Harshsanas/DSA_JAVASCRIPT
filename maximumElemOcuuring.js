function runProgram(input) {
  var input = input.trim().split(/[\r\n]+/);
  var array = input[1].trim().split(" ").map(Number);
  console.log(input);
  console.log(array);
  var obj = {};
  for (let i = 0; i < array.length; i++) {
    obj[array[i]] == undefined ? (obj[array[i]] = 1) : obj[array[i]]++;
  }
  console.log(obj);
  var count = 1;
  var output;
  var element = true;
  for (key in obj) {
    if (element) {
      output = key;
      element = false;
    } else if (obj[key] > count) {
      count = obj[key];
      output = key;
    }
  }
  console.log(output);
}
if (process.env.USERNAME === "prasa") {
  runProgram(`5
0 2 0 6 9`);
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
