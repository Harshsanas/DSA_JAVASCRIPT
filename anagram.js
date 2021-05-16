function runProgram(input) {
  var input = input.trim().split("\n");
  // console.log(input);
  var string = input[0].trim();

  var sort_A = "";
  var sort_B = "";

  var sortAlp = function (elem) {
    return elem.trim().split(" ").join("").split("").sort().join("");
  };

  sort_A = sortAlp(string);

  // console.log(sort_A);

  var substring = input[1].trim().split(" ");
  substring = substring.join("");
  var sorting = function (elem) {
    return elem.split("").sort().join("");
  };
  sort_B = sorting(substring);
  // console.log(sort_B);
  if (sort_A == sort_B) {
    console.log("True");
  } else {
    console.log("False");
  }
}
if (process.env.USERNAME === "prasa") {
  runProgram(`masai school a transformation
trasnformation school a masai`);
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
