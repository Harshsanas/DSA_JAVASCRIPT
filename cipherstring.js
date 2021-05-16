function runProgram(input) {
  var input = input.trim().split("\n");
  var array = input[2].trim().split("");
  //   console.log(input);
  console.log(array);

  var obj = {};

  for (var i = 2; i < array.length; i++) {
    obj[array[i]] == undefined ? (obj[array] = 1) : obj[array[i]]++;
  }
  console.log(obj);

  var output;
  var element = true;

  for (key in obj) {
    if (element) {
      output = key;
      element = false;
    }
  }
  console.log(output);
}

if (process.env.USERNAME === "prasa") {
  runProgram(`2
5   
aabcc
5
aazaa`);
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
