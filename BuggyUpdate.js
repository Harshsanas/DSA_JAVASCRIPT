function runProgram(input) {
  var input = input.trim().split(/[\r\n]+/);
  // console.log(input);

  var test=+input[0]
  // console.log(test)

  for(var i=0,line=1;i<test;i++){
    var [major1, minor1, patch1]=input[line++].trim().split(".").map(Number);
    var [major2, minor2, patch2] = input[line++].trim().split(".").map(Number);

    //  console.log(major1, minor1, patch1, major2, minor2, patch2);
    
    if (major1 > major2) {
      console.log("False");
    } else 
    if (major1 == major2) {
      if (minor1 > minor2) {
        console.log("False");
      } else if (minor1 == minor2) {
        if (patch1 > patch2) {
          console.log("False");
        } else {
          console.log("True");
        }
      }
    }
  }
  }
  

if (process.env.USERNAME === "lenovo") {
  runProgram(`3
2.0.1
1.9.8
12.0.1
12.10.0
1.1.10
1.1.12`);
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
