function runProgram(input) {
  var input = input.trim().split(/[\n\r]+/);
  //   console.log(input);

  let test = Number(input[0]);
  //   console.log(test);

  for (let i = 0, line = 1; i < test; i++) {
    var N = input[line++].trim().split(" ").map(Number);
    // console.log(N);

    var mat = [];

    for (let j = 0; j < N; j++) {
      mat.push(input[line++].trim().split(" ").map(Number));
    }
    // console.log(mat);

    for (var j = 0; j < mat.length; j++) {
      var str = "";
      for (var k = mat[j].length; k > 0; k--) {
        str += mat[j][k - 1] + " ";
      }

      console.log(str);
    }
  }
}

if (process.env.USERNAME === "prasa") {
  runProgram(`2
3 
1 2 3
4 5 6
7 8 9
4
1 2 3 4
5 6 7 8
9 0 1 2
3 4 5 6`);
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
