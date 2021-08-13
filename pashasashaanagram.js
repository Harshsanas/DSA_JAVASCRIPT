function runProgram(input) {
  input = input.trim().split(/[\n\r]+/);
//   console.log(input)
  var tests = +input[0];
//   console.log(tests)

  for(var i=0,line=1;i<tests;i++){
      var string1 = input[line++].trim().split("")
      string1.sort();
      var string2 = input[line++].trim().split("");
      string2.sort();
    //   console.log(string1)
    //   console.log(string2)

      if(string1.join("")==string2.join("")){
          console.log("True")
      }else{
          console.log("False")
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
