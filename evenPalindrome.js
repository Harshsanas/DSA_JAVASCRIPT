function runProgram(input) {
  input = input.trim().split(/[\r\n]+/);
  //console.log(input);

  var tests = Number(input[0]);
  //console.log(tests);

  var strings = input[1];
  //console.log(strings);
  var even = "";

  for (var i = 0; i <= tests; i++) {
    if (i % 2 === 0) {
      even = even + strings[i];
    }
  }
  isPalindrome(even);
}

const isPalindrome = (e) => {
  console.log(e);
  var i = 0;
  var lastElem = e.length - 1;

  while (i < lastElem) {
    if (e[i] !== e[lastElem]) {
      console.log("no");
      return;
    }

    i++;
    lastElem--;
  }
  console.log("yes");
};

if (process.env.USERNAME === "prasa") {
  runProgram(`6
abcdcfa`);
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
