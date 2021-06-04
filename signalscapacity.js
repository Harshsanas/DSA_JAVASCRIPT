function runProgram(input) {
  var input = input.trim().split(/[\r\n]+/);
  // console.log(input);

  var tests = Number(input[0]);

  for (var i = 0, line = 1; i < tests; i++) {
    var num = Number(input[line++]);

    var elem = input[line++].trim().split(" ").map(Number);

    // console.log(num, elem);

    var stack = [0];

    var output = [1];
    for (var j = 1; j < elem.length; j++) {
      var count = 1;

      while (stack.length !== 0 && elem[stack[stack.length - 1]] <= elem[j]) {
        var temp = stack.pop();

        count = count + output[temp];
      }

      stack.push(j);
      output[j] = count;
    }

    console.log(output.join(" "));
  }
}
//

if (process.env.USERNAME === "prasa") {
  runProgram(`2
7
100 80 60 70 60 75 85
5
3 5 0 9 8`);
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
