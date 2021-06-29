function runProgram(input) {
  var input = input.trim().split("\n");
  var index = 1;
  var temp = Number(input[0]);
  //   console.log(input);
  //   console.log(temp);

  for (var i = 1; i <= temp; i++) {
    var num = Number(input[index]);
    index++;
    var array = input[index].split(" ").map(Number);
    index++;
    console.log(findOdd(array));
  }
}
function findOdd(array) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 == 1) {
      count++;
    }
  }
  if (count % 2 == 1) {
    return "Yes";
  } else {
    return "No";
  }
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`3
1
1
2
1 101
2
1 200`);
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
