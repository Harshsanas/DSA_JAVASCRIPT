function runProgram(input) {
  var input = input.trim().split(/[\n\r]+/);
  //   console.log(input);
  input.shift();
  console.log(input);

  var data = input.map((e) => {
    var [name, height, weight, iq] = e.trim().split(" ");

    return {
      name: name,
      height: Number(height),
      weight: Number(weight),
      iq: Number(iq),
    };
  });
  data.pop();
  data.pop();
  //   console.log(data);

  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data.length - i - 1; j++) {
      if (
        data[j + 1].iq > data[j].iq &&
        data[j + 1].height > data[j].height &&
        data[j + 1].weight > data[j].weight
      ) {
        var temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      } else if (data[j + 1].iq == data[j].iq) {
        if (data[j + 1].name < data[j].name) {
          var temp = data[j];
          data[j] = data[j + 1];
          data[j + 1] = temp;
        }
      }
    }
  }
  console.log(data);
}

if (process.env.USERNAME === "prasa") {
  runProgram(`10
jack 158 85 112
john 168 74 124
arti 148 65 120
bhuvan 182 84 124
navi 182 84 124
vijay 175 88 115
amit 180 89 119
kevin 182 77 120
rohit 174 85 100
vivek 184 75 111

`);
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
