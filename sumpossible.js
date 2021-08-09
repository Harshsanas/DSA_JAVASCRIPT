function runProgram(input) {
  var input = input.trim().split(/[\r\n]+/);
    // console.log(input);

    var test=+input[0]
    // console.log(test)

    for( var i=0,line=1;i<test;i++){
        var num=+input[line++]
        var elem=input[line++].trim().split(" ").map(Number)

        // console.log(num,elem)

        var flag=false;

        for(var j=0;j<num;j++){

            var count=0
            for(var k=j;k<num;k++){
                count=count+elem[k]

                if(count%2==0){
                    flag=true;
                    break;
                }
            }
            if(flag){
                break
            }
        }

        if(flag==true){
            console.log("Yes")
        }else{
            console.log("No")
        }
    }

}

if (process.env.USERNAME === "lenovo") {
  runProgram(`2
1
5
4
1 2 3 4`);
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
