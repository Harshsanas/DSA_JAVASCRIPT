function runProgram(input) {
  input = input.trim();
  //console.log(input);

  function minkeys(input) {
    var obj = {};
    for (let i = 0; i < input.length; i++) {
      obj[input[i]] = null;
    }
    var arr = Object.keys(obj);
    return arr;
  }

  var unique_keys = minkeys(input);
  // console.log(unique_keys);
  var keylength = unique_keys.length;
  // console.log(keylength);
  var min = 10;
  for (let i = 0; i < input.length; i++) {
    for (let j = i; j < input.length; j++) {
      var string = input.slice(i, j + 1);
      // console.log(string);
      if (string.length >= keylength) {
        var count = minkeys(string);
        // console.log(count);
        if (count.length == keylength) {
          // console.log(count, string);
          if (string.length < min) {
            min = string.length;
          }
        }
      }
    }
  }
  console.log(min);
}
//

if (process.env.USERNAME === "prasa") {
  runProgram(`zoomsessionmooz`);
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
