function runProgram(input) {
  var input = input.trim().split(/[\r\n]+/);
  //   console.log(input);

  var test = Number(input[0]);
  //   console.log(test);

  var index = 1;

  for (var i = 0; i < test; i++) {
    var n = Number(input[index]);
    index++;
    // console.log(n);

    var array = input[index].trim().split("");
    // console.log(array);
    index++;

    var letter = input[index].trim().split(" ");
    // console.log(letter);
    index++;

    var total = 0;

    array = array.join("");
    // console.log(array);

    for (var j = 0; j < array.length; j++) {
      //   console.log(array[j]);
      var string = "";
      for (var k = j; k < array.length; k++) {
        string = string + array[k];
        // console.log(string);
        if (string[0] == letter) {
          total++;
        }
      }
    }
    console.log(total);
  }
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`1
4
aman
a`);
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
