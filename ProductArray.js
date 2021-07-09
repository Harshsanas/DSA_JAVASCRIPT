function runProgram(input) {
  var input = input.trim().split(/[\r\n]+/);
    // console.log(input)

    var num=+input[0]
    // console.log(num)

    var elem=input[1].trim().split(" ").map(Number)
    // console.log(elem)

    var productElem=1

    for(var i=0;i<elem.length;i++){
        productElem=productElem*elem[i]
    }
    console.log(productElem)


};
if (process.env.USERNAME === "lenovo") {
  runProgram(`5
3 5 2 9 4`);
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
