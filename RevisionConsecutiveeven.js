function runProgram(input) {
  var input = input.trim().split("\n");
//   console.log(input)

  var test=+input[0]
  // console.log(test)

  for(var i=0,line=1;i<test;i++){
    var num=+input[line++]
    var elem=input[line++].trim().split(" ").map(Number)

    if(consecutive(elem)==true){
      console.log("Yes")
    }else{
      console.log("No")
    }
  }

  function consecutive(elem){
    for(var i=0;i<elem.length-2;i++){
      if(elem[i]%2==0 && elem[i+1]%2==0 && elem[i+2]%2==0){
        return true
      }
    }
  }
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`2
3
1 2 3
5
1 2 4 6 8`);
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
