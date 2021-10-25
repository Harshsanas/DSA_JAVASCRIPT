// function swapArr(A){
//     A.sort((a,b)=>{
//         return a-b
//     })
    
//     for(var i=0;i<A.length-1;i++){
//         if(i%2==1){
//             var temp = A[i];
//             A[i]=A[i+1];
//             A[i+1]=temp;
//         }
//     }
//     return A;
// }

// A = [1, 2, 3, 4, 5, 6];
// console.log(swapArr(A));


// let rev = 0;
// let num = 123456;
// let lastDigit;

// while(num != 0){
//   lastDigit = num % 10;
//   rev = rev * 10 + lastDigit;
//   num = Math.floor(num/10);
// }
// console.log(lastDigit);

// console.log("Reverse number : "+rev);

// function reverseString(str) {
//   var newString = "";
//   for (var i = str.length - 1; i >= 0; i--) {
//     newString += str[i]; 
//   }
//   return newString; 
// }

// console.log(reverseString("hello"));

// var arr = [1, 3, 2, 3, 4, 1, 3, 5, 7];
// var newarr=arr.reduce((a,c)=>{
//     if(a.indexOf(c)===(-1)){
//         a.push(c)
//     }
//     return a;
// },[])
// console.log(newarr)

// for (var i = 0; i < arr.length; i++) {
//   if (obj[arr[i]]) {
//     obj[arr[i]] += 1;
//   } else {
//     obj[arr[i]] = 1;
//   }
// }
// console.log(obj);
// console.log(Object.keys(obj));

