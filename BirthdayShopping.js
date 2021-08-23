function runProgram(input) {
  var [N,K] = input.trim().split(" ").map(Number);
//   console.log(N,K);

if (K == 1) {
  for (var i = 1; i <= N; i++) {
    console.log(i);
  }
} else if (K == 2) {
  for (var i = 1; i <= N; i++) {
    for (var j = i + 1; j <= N; j++) {
      console.log(i, j);
    }
  }
} else if(K == 3) {
  for (var i = 1; i <= N; i++) {
    for (var j = i + 1; j <= N; j++) {
      for(var k = j + 1; k <= N; k++) {
      console.log(i, j, k);
    }
    }
  }
}function runProgram(input) {
  var [N,K] = input.trim().split(" ").map(Number);
//   console.log(N,K);

if (K == 1) {
  for (var i = 1; i <= N; i++) {
    console.log(i);
  }
} else if (K == 2) {
  for (var i = 1; i <= N; i++) {
    for (var j = i + 1; j <= N; j++) {
      console.log(i, j);
    }
  }
} else {
  for (var i = 1; i <= N; i++) {
    for (var j = i + 1; j <= N; j++) {
      for(var k = j + 1; k <= N; k++) {
      console.log(i, j, k);
    }
    }
  }
}
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`3 1`);
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

}

if (process.env.USERNAME === "lenovo") {
  runProgram(`3 1`);
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
