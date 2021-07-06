function runProgram(input) {
  input = input.split(/[\r\n]+/);
  var elem = input.map((e) => e.split(" "));
  console.log(elem);

  var arr = elem.slice(1, elem.length);
  console.log(arr);

  var queCol = [];
  var queRow = [];
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    if (arr[i][0] == "E") {
      if (obj[arr[i][1]] === undefined || obj[arr[i][1]] === 0) {
        queCol.push(arr[i][1]);
        queRow.push(arr[i][2]);
        obj[arr[i][1]] = 1;

      } else {
        var lastElem = queCol.length - 1;
        while (queCol[lastElem] != arr[i][1] && queCol.includes(arr[i][1])) {
          lastElem = lastElem - obj[queCol[lastElem]];
        }
        if (queCol[lastElem] == arr[i][1]) {
          queCol.splice(lastElem + 1, 0, arr[i][1]);
          queRow.splice(lastElem + 1, 0, arr[i][2]);
          obj[arr[i][1]] = obj[arr[i][1]] + 1;
        }
      }
    } else if (arr[i][0] == "D") {
      console.log(queCol[0] + " " + queRow[0]);

      obj[queCol[0]] = obj[queCol[0]] - 1;
      queCol.shift();
      queRow.shift();
    }
  }
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`5
E 1 1
E 2 1
E 1 2
D
D`);
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
