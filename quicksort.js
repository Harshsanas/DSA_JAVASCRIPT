function runProgram(input) {
  var input = input.trim().split(/[\r\n]+/);
    // console.log(input);

    var num=+input[0]
    var elem=input[1].trim().split(" ").map(Number)
    // console.log(num,elem);

    console.log(quickSort(elem).join(" "));

    

function quickSort(elem) {
  if (elem.length <= 1) {
    return elem;
  }

  var pivot = elem[0];
  var leftelem = [];
  var rightelem = [];

  for (var i = 1; i < elem.length; i++) {
    if (elem[i] > pivot) {
      leftelem.push(elem[i]);
    } else {
      rightelem.push(elem[i]);
    }
  }
  return quickSort(leftelem).concat(pivot, quickSort(rightelem));
}
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`5
2 3 1 4 5`);
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
