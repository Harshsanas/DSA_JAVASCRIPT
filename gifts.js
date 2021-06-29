function runProgram(input) {
  input = input.trim().split(/[\n\r]+/);
  var tests = +input[0];
  for (var x = 0, line = 1; x < tests; x++) {
    var N = Number(input[line++]);
    var elem = input[line++].trim().split(" ").map(Number);
    // console.log(N, elem);
    var i = 0;
    var j = 0;
    var max = 0;
    var set = new Set();
    while (j < N) {
      if (!set.has(elem[j])) {
        set.add(elem[j]); // add distrinct element
        j++;
        max = Math.max(set.size, max);
      } else {
        set.delete(elem[i]); // remove repeating element
        i++;
      }
    }
    console.log(max);
  }
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`3
8
1 2 1 3 2 7 4 2
5
1 2 1 3 4
4
1 2 2 1`);
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