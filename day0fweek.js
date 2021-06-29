function runProgram(input) {
  input = input.trim().split("\n");
  //console.log(input);
  var cur_day = input[0];
  var n_day = Number(input[1]);
  //   console.log(cur_day);
  //   console.log(n_day);
  var week_days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  for (var i = 0; i < week_days.length; i++) {
    if (cur_day == week_days[i]) {
      var day = (i + n_day) % 7;
      day = week_days[day];
    }
  }
  console.log(day);
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`Wednesday
8`);
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
