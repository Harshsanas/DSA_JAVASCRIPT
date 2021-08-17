function runProgram(input) {
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  var [num] = input[0].trim().split(" ").map(Number);
  var array = [];
  for (var k = 1; k <= num; k++) {
    array.push(input[k].trim().split(" ").map(Number));
  }
  rowReverse(array, num);
}
function rowReverse(array, num) {
  for (var i = 0; i < array.length; i++) {
    var output = [];
    for (var j = num - 1; j >= 0; j--) {
      output.push(array[i][j]);
    }
    console.log(output.join(" "));
  }
}
function rotate90(array, num) {
  for (var i = 0; i < num; i++) {
    var output = [];
    for (var j = 0; j < array[i].length; j++) {
      output.push(array[j][i]);
    }
    console.log(output.join(" "));
  }
}
function rotate270(array, num) {
  for (var i = num - 1; i >= 0; i--) {
    var output = [];
    for (var j = 0; j < array[i].length; j++) {
      output.push(array[j][i]);
    }
    console.log(output.join(" "));
  }
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`4
1 2 3 4
1 2 3 4
1 2 3 4
1 2 3 4`);
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
