function runProgram(input) {
  var input = input.trim().split(/[\r\n]+/);
  // console.log(input);

  var test = Number(input[0]);
  // console.log(test);

  var index = 1;

  for (var i = 0; i < test; i++) {
    var num = Number(input[index]);
    // console.log(num);

    index++;

    var array = input[index].trim().split("");
    index++;
    // console.log(array);
    array = array.join("");
    // console.log(array);

    var total = 0;
    for (var j = 0; j < array.length; j++) {
      var string = "";

      for (var k = j; k < array.length; k++) {
        string = string + array[k];
        // console.log(string);

        if (string == "mouse") {
          total++;
        }
      }
    }
    console.log(total);
  }
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`2
7
mousems
8
wimousee`);
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
