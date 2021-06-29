function runProgram(input) {
  var input = input.trim().split(/[\r\n]+/);
  // console.log(input);
  var elem = Number(input[0]);
  // console.log(elem);
  var total = 0;
  var nums = input[1].trim().split(" ").map(Number);
  // console.log(nums);

  var array = [];
  for (var i = 0; i < nums.length; i++) {
    var index = i + 1;
    // console.log(index);

    var num = index * nums[i];

    array.push(num);
  }
  // console.log(array);
  for (var j = 0; j < array.length; j++) {
    total = total + array[j];
  }
  console.log(total);
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`5
0 1 1 1 1`);
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
