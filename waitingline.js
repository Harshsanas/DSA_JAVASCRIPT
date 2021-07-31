//Enter code here
function runProgram(input) {
  // TE = O(n)
  // SC = O(n)
  input = input.trim().split(/[\n\r]+/);
  let elem = input[0].trim().split("");
  console.log(Paranthesis(elem) ? "balanced" : "unbalanced");
}
let Paranthesis = function (elem) {
  let stack = [];
  for (let i = 0; i < elem.length; i++) {
    if (elem[i] === "(" || elem[i] === "{" || elem[i] === "[") {
      stack.push(elem[i]);
    } else if (elem[i] == ")" || elem[i] == "}" || elem[i] == "]") {
      if (elem[i] == ")" && stack[stack.length - 1] == "(") {
        stack.pop();
      } else if (elem[i] == "}" && stack[stack.length - 1] == "{") {
        stack.pop();
      } else if (elem[i] == "]" && stack[stack.length - 1] == "[") {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
};
if (process.env.USERNAME === "lenovo") {
  runProgram(`(((((((((())))))))))`);
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
