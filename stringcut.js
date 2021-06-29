function runProgram(input) {
  // Write code here
  //console.log(input.trim().split(" "));split(/[\r\n]+/)
  var string = input.length / 2;
  if (input.length % 2 == 0) {
    string1 = input.slice(0, string);
    string2 = input.slice(string);
    var newstr = "";
    for (var i = string1.length - 1; i >= 0; i--) {
      newstr = newstr + string1[i];
    }
    for (var i = string2.length - 1; i >= 0; i--) {
      newstr = newstr + string2[i];
    }
    console.log(newstr);
  }
  if (input.length % 2 == 1) {
    string1 = input.slice(0, string);
    string2 = input.slice(string + 1);
    var newstr = "";
    for (var i = string1.length - 1; i >= 0; i--) {
      newstr = newstr + string1[i];
    }
    var mid = Math.floor(input.length / 2);
    newstr = newstr + input[mid];
    for (var i = string2.length - 1; i >= 0; i--) {
      newstr = newstr + string2[i];
    }
    console.log(newstr);
  }
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`abcxyz`);
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
