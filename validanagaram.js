function runProgram(input) {
  var input = input.trim().split(/[\n\r]+/);
    // console.log(input);

    var test=+input[0]
    // console.log(test)

    var str=[]
    
    for (let i = 0,line=1; i < test * 2; i++) {
      str.push(input[line++].trim());
    }
    //console.log(str);
    for (let i = 0; i < str.length; i += 2) {
        var str1=str[i].split("").sort().join("")
        var str2 = str[i + 1].split("").sort().join("");
      if ( str1 == str2) {
        console.log("True");
      } else {
        console.log("False");
      }
    }
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`2
abcd
dcab
aa
aaa`);
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
