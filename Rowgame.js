function runProgram(input) {
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  var test = +input[0];
  for (var l = 0,line = 1; l < test; l++) {
    let [N, M] = input[line++].trim().split(" ").map(Number);
    let arr = [];
    for (let x = 0; x < N; x++) {
      arr.push(input[line++].trim().split(" ").map(Number));
    }
    //console.log(N, arr);
    var count = 0;
    var set = new Set();
    for (var i = 0; i < M; i++) {
      set.add(arr[0][i]);
    }
    var setValue = set.values();
    var newValue = [...setValue];
    //console.log(setValue);
    //console.log(newValue);
    var i = 0;
    while (i < newValue.length) {
      var value = newValue[i];
      var rowCount = 0;
      for (var i = 0; i < N; i++) {
        for (var j = 0; j < M; j++) {
          if (value == arr[i][j]) {
            rowCount++;
            break;
          }
        }
        if (rowCount == N) {
            count++
        };
      }
      i++;
    }
    console.log(count);
  }
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`5
3 3 5 5 1`);
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
