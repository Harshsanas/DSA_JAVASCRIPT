function runProgram(input) {
  var input = input.trim().split(/[\n\r]+/);
  // console.log(input);

  input.shift();

  var details = input.map((e) => {
    var [name, marks] = e.trim().split(" ");

    return { name: name, marks: Number(marks) };
  });

  // console.log(details);

  for (var i = 0; i < details.length; i++) {
    for (var j = 0; j < details.length - i - 1; j++) {
      if (details[j + 1].marks > details[j].marks) {
        var temp = details[j];
        details[j] = details[j + 1];
        details[j + 1] = temp;
      } else if (details[j + 1].marks == details[j].marks) {
        if (details[j + 1].name < details[j].name) {
          var temp = details[j];
          details[j] = details[j + 1];
          details[j + 1] = temp;
        }
      }
    }
  }
  // console.log(details);

  var scores = 1;
  details.forEach((e, index) => {
    if (index == 0) {
      console.log(`${scores} ${e.name}`);
    } else if (e.marks == details[index - 1].marks) {
      console.log(`${scores} ${e.name}`);
    } else {
      scores = index + 1;
      console.log(`${scores} ${e.name}`);
    }
  });
}
if (process.env.USERNAME === "prasa") {
  runProgram(`6
rancho 45
chatur 32
raju 30
farhan 28
virus 32
joy 45`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  var read = "";
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
