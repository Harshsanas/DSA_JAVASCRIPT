function runProgram(input) {
  input = input.trim().split(/[\n\r]+/);

  var tests = +input[0];
  for (let z = 0, line = 1; z < tests; z++) {
    let N = Number(input[line++]);
    let array1 = input[line++].trim().split(" ").map(Number);
    let array2 = input[line++].trim().split(" ").map(Number);

    //console.log(N, array1, array2);

    let object1 = {};
    let object2 = {};
    let total = 0;

    for (key of array1) {
      object1[key] === undefined ? (object1[key] = 1) : object1[key]++;
    }

    // console.log(object1[key]);
    for (key of array2) {
      object2[key] === undefined ? (object2[key] = 1) : object2[key]++;
    }

    // console.log(object2[key]);
    // console.log(object1, object2);

    for (key in object1) {
      if (key in object2) {
        if (object1[key] > object2[key]) {
          for (let i = 0; i < object2[key]; i++) {
            total++;
          }
        } else {
          for (let i = 0; i < object1[key]; i++) {
            total++;
          }
        }
      }
    }

    console.log(total);
  }
}

if (process.env.USERNAME === "prasa") {
  runProgram(`1
6
1 2 2 3 4 5
4 4 3 2 1 1`);
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
