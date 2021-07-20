function runProgram(input) {
  var input = input.trim().split(/[\r\n]+/);
//   console.log(input);

  var test =+input[0]
//   console.log(test)

  for(var i=0,line=1;i<test;i++){
      var size=+input[line++]

      let mat=[]

      for(var j=0;j<size;j++){
          mat.push(input[line++].trim().split(" "))
      }
      
    //   console.log(size);
    //   console.log(mat)

      var left=0
      var right=size-1
      var top=0
      var bottom=size-1
      var matrix=[]
      var count=0

      while(left<=right && top<=bottom){
          for(var i=top;i<=bottom && count<size;i++){
              matrix.push(mat[i][left])
              count++
          }
          left++;

        //   for(var i=left;i<=right && count<size;i++){
        //       matrix.push(mat[bottom][i]);
        //       count++;
        //   }
        //   bottom--;

          
          for (var i = bottom; i >= top && count < size; i--) {
            matrix.push(mat[i][right]);
            count++;
          }
          right--;

          
        //   for (var i = right; i >= left && count < size; i--) {
        //     matrix.push(mat[top][i]);
        //     count++;
        //   }
        //   top++;
      }
      console.log(...matrix)
  }
}

if (process.env.USERNAME === "lenovo") {
  runProgram(`1
3
1 2 3
4 5 6
7 8 9`);
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
