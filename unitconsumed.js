function runProgram(input) {
  var input = input.trim().split(' ').map(Number);
    // console.log(input)

    var initialPrice=80
    var unit=0
    

    var cost=input-initialPrice

    if(cost<=150){
        unit=unit+cost/3
    }else if(cost>150 && cost<=650){
        unit+=50 + (cost-150)/5
    }else if(cost>650){
        unit+=50 + 100+(cost-650)/10
    }
    console.log(unit)

}
if (process.env.USERNAME === "lenovo") {
  runProgram(`930`);
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
