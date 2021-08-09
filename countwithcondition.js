function runProgram(input) {
  var input = input.trim().split(/[\r\n]+/);
    // console.log(input);

    var [num,total]=input[0].split(" ").map(Number)
    var elem=input[1].trim().split(" ").map(Number)

    // console.log(num,total)
    // console.log(elem)

    var start=0;
    var count=0;
    var sum=elem[0]
for (let i = 1; i <= num; i++) {
  while (sum > total && start <= i - 1) {
    sum -= elem[start];
    start++;
  }
  //console.log(sum, X)
  if (sum == total) {
    count++;
    
  }
  if (sum < total) {
    sum += elem[i];
  }
}
console.log(count);
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`4 10
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
