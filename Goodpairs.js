//Enter code here

function runProgram(input) {
  var input = input.trim().split(/[\r\n]+/);
//   console.log(input);

  var test = +input[0];

  for (var i = 0, line = 1; i < test; i++) {
    var num = +input[line++];
    var elem = input[line++].trim().split(" ").map(Number);
    // console.log(num, elem);
    var count = 0;
   for (var j = 0; j < num; j++) {
     for (var k = 0; k < num; k++) {
       if (j != k && elem[k] == 2 * elem[j]) {
         count++;
       }
     }
   }
    console.log(count);
  }
  

}

if (process.env.USERNAME === "lenovo") {
  runProgram(`2
5
1 1 1 1 1
6
1 1 2 2 4 1 `);
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
