function runProgram(input) {
  var input = input.trim().split(/[\r\n]+/);
    // console.log(input);

    var test=+input[0]

    for(var k=0,line=1;k<test;k++){
        var [N,sum]=input[line++].trim().split(" ").map(Number)
        var elem=input[line++].trim().split(" ").map(Number)
        // console.log(N, sum, elem);
        elem.sort((a, b) => a - b);
        var i = 0;
        var j = 1;
        var output = true;
        while (i < N && j < N) {
          if (elem[j] - elem[i] === sum) {
            console.log("Yes");
            output = false;
            break;
          } else if (elem[j] - elem[i] > sum) {
            i++;
          } else if (elem[j] - elem[i] < sum) {
    j++;
  }
}
if (output) {
  console.log("No");
}    
}
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`2
5 3
1 2 3 4 5
5 8
1 2 3 4 5 `);
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
