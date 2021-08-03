function runProgram(input) {
  var input = input.trim().split(/[\n\r]+/);
    // console.log(input);

    var string1=input[0].trim();
    var string2=input[1].trim();

    // console.log(string1,string2)

    var ans=string1.indexOf(string2[0])
    // console.log(ans)
   
    for(var i=0;i<string2.length-1;i++){
        var ind = Math.abs(
          string1.indexOf(string2[i]) - string1.indexOf(string2[i+1])
        );

        ans=ans+ind
    }

    console.log(ans)
    
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`pqrstuvwxyzabcdefghijklmno
hello`);
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
