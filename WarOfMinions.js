function runProgram(input) {
  var input = input.trim().split(/[\r\n]+/);
  console.log(input)

  let num=+input[0];
  var elem=input[1].trim().split("");
  console.log(num,elem);

  var stack=[]
  for(var i=0;i<num;i++){
      if(top(stack)==elem[i]){
          stack.pop()
      }else{
          stack.push(elem[i]);
      }
  }

  if(stack.length!=0){
      console.log(stack.join(""));
  }else{
      console.log(-1)
  }

  function top(elem){
      if (elem.length == 0) {
        return "Empty!";
      } else {
        return elem[elem.length-1];
      }
  }
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`5
aabbc`);
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
