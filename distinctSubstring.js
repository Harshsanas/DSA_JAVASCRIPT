function runProgram(input) {
  var input = input.trim().split(/[\n\r]+/);
  //   console.log(input);

  var test = Number(input[0]);
  //   console.log(test);
  var line = 1;
  for (var m = 0; m < test; m++) {
    var num = Number(input[line++]);

    var elem = input[line++].trim();

    // console.log(num, elem);

    var total = 0;
    var object = {};
    var flag = true;

    for (var i = 0; i < elem.length; i++) {
      flag = true;

      for (j = i; j < elem.length; j++) {
        var substring = elem.slice(i, j + 1);

        // console.log(substring);

        if (object[substring] == undefined) {
          object[substring] = 1;
          total++;
        }
      }
    }
    console.log(total);
  }
}

if (process.env.USERNAME === "prasa") {
  runProgram(`2
5
abcde
3
aaa`);
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
