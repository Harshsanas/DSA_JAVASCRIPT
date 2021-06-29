function runProgram(input) {
  var input = input.trim().split("\n");
  // console.log(input);

  var array = [];

  for (var i = 2; i < input.length; i++) {
    array.push(input[i].trim().split(" ").map(Number));
  }
  // console.log(array);

  function Product(array) {
    array.sort(function (a, b) {
      return a - b;
    });

    product = array[array.length - 1] * array[array.length - 2];
    return product;
  }

  for (var i = 0; i < array.length; i++) {
    var result = Product(array[i]);
    console.log(result);
  }
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`3
6 
1 0 7 2 4 0
5
1 2 3 4 5
2
0 0`);
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
