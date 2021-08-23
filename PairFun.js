function runProgram(input) {
  var input = input.trim().split(/[\n\r]+/);
    // console.log(input);
  var  test = +input[0];
    // console.log(test);

    var count=0

    for(var k = 0, line = 1; k < test; k++){
        var num=+input[line++];
        var elem= input[line++].trim().split(" ").map(Number)
        // console.log(num,elem);

        for(var i=0; i<elem.length; i++){
            for(var j=0; j<elem.length;j++){
                if(4*elem[i]==5*elem[j] && i!=j){
                    count++;
                }
            }
        }
        console.log(count)
    }
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`2
6
5 5 5 4 4 4
3
0 0 0`);
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
