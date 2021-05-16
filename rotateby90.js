function runProgram(input) {
  input = input.trim().split("\n");

  var mat = input[0].split(" ").map(Number);

  var array = [];

  for (var i = 1; i <= mat; i++) {
    array.push(input[i].trim().split(" ").map(Number));
  }

  for (var i = array.length - 1; i >= 0; i--) {
    var string = "";

    for (var j = 0; j < array[i].length; j++) {
      string = string + array[j][i] + " ";
    }

    console.log(string);
  }
}

if (process.env.USERNAME === "prasa") {
  runProgram(`4
1 2 3 4
5 6 7 8
1 2 3 4
5 6 7 8`);
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
