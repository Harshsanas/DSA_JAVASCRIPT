function runProgram(input) {
  input = input.trim().split(/[\n\r]+/);
//   console.log(input)

  var test=+input[0]


  var array=[]
  for(var k=0,line=1; k<test; k++) {
      var num=+input[line++]
      var str=input[line++].trim();
    //   console.log(num,str)

      for(var i=0;i<str.length;i++) {
          var strings=""
          for (var j = i; j < str.length; j++) {
            strings = strings + str[j];
            array.push(strings);
          }
      }

    //   console.log(array)
    for(var l=0;l<array.length;l++){
        console.log(array[l])
    }
    }
}

  
if (process.env.USERNAME === "lenovo") {
  runProgram(`1
4 
aman`);
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
