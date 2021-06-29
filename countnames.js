function runProgram(input) {
  input = input.trim().split(/[\r\n]+/);
  var test = +input[0];
  var array = [];
  for (let i = 1; i < input.length; i = i + 1) {
    array.push(input[i].trim());
  }
  array.sort();
  var obj = {};
  for (let i = 0; i < array.length; i++) {
    obj[array[i]] == undefined ? (obj[array[i]] = 1) : obj[array[i]]++;
  }
  //console.log(obj);
  for (key in obj) {
    console.log(key, obj[key]);
  }
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`
    3
    masai
    school
    masai
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
