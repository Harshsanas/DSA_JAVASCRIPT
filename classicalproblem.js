function runProgram(input) {
  var input = input.trim().split(/[\n\r]+/);
  //   console.log(input);

  var tests = Number(input[0]);
  //   console.log(tests);

  for (var i = 0, line = 1; i < tests; i++) {
    var elem = input[line++].trim().split("");

    // console.log(elem);

    function Bracket(char) {
      if (char == "{") {
        return "}";
      }
      if (char == "}") {
        return "{";
      }
      if (char == "[") {
        return "]";
      }
      if (char == "]") {
        return "[";
      }
      if (char == "(") {
        return ")";
      }
      if (char == ")") {
        return "(";
      }
    }

    var stack = [];

    for (var j = 0; j < elem.length; j++) {
      if (Bracket(elem[j]) == stack[stack.length - 1]) {
        stack.pop();
      } else {
        stack.push(elem[j]);
      }
    }
    console.log(stack.length == 0 ? "balanced" : "not balanced");
  }
}
if (process.env.USERNAME === "prasa") {
  runProgram(`3
{([])}
()
([]
`);
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
