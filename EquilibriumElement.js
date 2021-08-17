function runProgram(input) {
  input = input.trim().split(/[\n\r]+/);
//   console.log(input);

  var num=+input[0]
  var elem=input[1].trim().split(" ").map(Number);

  console.log(equilibrium(elem))

  function equilibrium(elem){
      var middlenumber=Math.floor(elem.length/2);

      return sum(elem,0,middlenumber)==sum(elem,middlenumber+1,elem.length)?middlenumber+1 : -1;    
  }

  function sum(elem,start,end){
      var sum = 0;
      for(var i=start;i<end;i++){
          sum += elem[i]
      }
      return sum;
  }
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`5
3 3 5 5 1`);
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
