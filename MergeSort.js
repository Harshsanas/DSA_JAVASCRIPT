function runProgram(input) {
  var input = input.trim().split(/[\r\n]+/);
    // console.log(input);

    var test=+input[0]
    console.log(test)

    var elem=input[1].trim().split(" ").map(Number)
    console.log(elem)
}

// function mergeSort(elem,low,high){
//   if(low>high){
//     arr=partition
//   }

// }

function Merging(elem,high,low){
  
}


if (process.env.USERNAME === "lenovo") {
  runProgram(`5
3 5 0 9 8`);
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
