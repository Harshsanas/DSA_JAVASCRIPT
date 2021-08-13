function runProgram(input) {
  var input = input.trim().split("\n");
//   console.log(input);

  var test = +input[0];
//   console.log(test)
for (let x = 0, line = 1; x < test; x++) {
  let num = +input[line++];
  let elem = input[line++].trim();
  //console.log(num, elem);
  let object = {};
  for (key of elem) {
    if(object[key] == undefined){
        object[key] =1
    }else{
        object[key] =object[key]+1
    }
  }
//   console.log(object);
//   console.log(object[key]);
  var count = 0;
  for (key in object) {
    if (object[key] % 2 == 1) {
      count++;
    }
  }
  if(count <= 1){
      console.log("Possible!")
  }else{
      console.log("Not Possible!")
  }
}}
if (process.env.USERNAME === "lenovo") {
  runProgram(`2
6
aabbcc
5
aabcd`);
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
