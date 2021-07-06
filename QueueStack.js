function runProgram(input) {
  var input = input.trim().split(/[\r\n]+/);
//   console.log(input);

  var elem=input.map((e)=>e.split(" "))
//   console.log(elem)

  var arrayelem=elem.slice(1,elem.length);
  console.log(arrayelem)

  var queueCol=[]
  var obj={}

  for(var i=0;i<arrayelem.length;i++){

    if(arrayelem[i][0]=="0"){
        queueCol.push(arrayelem[i][1]);
        obj[arrayelem[i][1]]=1;
    }
  }
    console.log(obj)
    console.log(queueCol);


}

if (process.env.USERNAME === "lenovo") {
  runProgram(`6
0 1
0 2
0 3
1 
2
1`);
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
