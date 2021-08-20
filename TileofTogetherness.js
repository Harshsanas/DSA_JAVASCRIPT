function runProgram(input) {
  var [a,b] = input.trim().split(" ");
//   console.log(a,b);

  split_a=a.trim().split("").map(Number)
//   console.log(split_a);
  
  var sum_a=0
  for(var i=0;i<split_a.length;i++) {
      var sum_a=sum_a+split_a[i]
  }
//   console.log(sum_a)

  var add_a=sum_a+Number(a)
  add_a=add_a.toString()
//   console.log(add_a)

  var addition_a=add_a.trim().split("").map(Number)
//   console.log(addition_a)

  var sum_addition_a=0
  for(var i=0;i<addition_a.length;i++) {
      sum_addition_a+=addition_a[i]
  }
//   console.log(sum_addition_a)

  var num=sum_addition_a+Number(add_a)
//   console.log(num)

  if(num==Number(b)){
      console.log(num)
  }else{
      console.log("-1")
  }

}

if (process.env.USERNAME === "lenovo") {
  runProgram(`32 47`);
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
