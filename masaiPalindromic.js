function runProgram(input) {
  var input = input.trim();
  // console.log(input);
  var array = [];
  for (var i = 0; i < input.length; i++) {
    var strings = "";
    for (var j = i; j < input.length; j++) {
      strings = strings + input[j];
      array.push(strings);
    }
  }
  // console.log(array);
  //   console.log(strings);

  function palindrome(string) {
    var string2 = "";
    for (var i = string.length - 1; i >= 0; i--) {
      string2 = string2 + string[i];
    }
    if (string == string2) {
      return true;
    } else {
      return false;
    }
  }

  var count = 0;
  for (var i = 0; i < array.length; i++) {
    // console.log(array[i]);
    if (palindrome(array[i])) {
      if (array[i].length > count) {
        count = array[i].length;
      }
    }
  }
  console.log(count);
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`thisracecarisgood`);
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
