function runProgram(input) {
  var input = input.trim().split("\n");
  var test = Number(input[0]);

  var index = 1;
  for (var i = 0; i <= test; i++) {
    var num = Number(input[index]);
    index = index + 1;
    var array_elem = input[index].split(" ").map(Number);
    index = index + 1;

    console.log(Sum(array_elem));
  }
}

function Sum(array_elem) {
  var sum = 0;
  for (var i = 0; i < array_elem.length; i++) {
    sum = sum + array_elem[i] * [i + 1];
  }
  return sum;
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`2
5
1 2 3 4 5
2
100 1`);
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
