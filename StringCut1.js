function runProgram(input) {

    var input=input.trim().split("");
    // console.log(input)
    
    var string1=[]
    var string2=[]
    var newstring=""

    if(input.length%2==0){
        string1=input.slice(0,input.length/2);
        string2 = input.slice(input.length / 2,input.length);
        newstring = "";        
    }else{
        string1 = input.slice(0, input.length / 2);
        string2 = input.slice(input.length / 2 +1, input.length);
        newstring=input[Math.floor(input.length/2)]
    }

    // console.log(string1, string2);
    var output =
      string1.reverse().join("") + newstring+string2.reverse().join("");
      console.log(output)
    
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`abcdxyz`);
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
