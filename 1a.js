var str="i   am  a  hello    achine  boy"

var strsplit=str.split("")
var str1=str.split(" ")
console.log(strsplit)
console.log(str1)
var count = 0;

for(var i=0;i<strsplit.length;i++){
    if(strsplit[i]==" "){
    count++
    }
}
console.log(count)

var arr1=[]

for(var i=0;i<str1.length;i++){
    if(str1[i].length>0){
        arr1.push(str1[i])
    }
}
console.log(arr1)

var len=arr1.length-1
console.log(len)

var space = count % len
console.log(space)

var mid=Math.floor(count / len)
console.log(mid)

console.log(arr1.join(" ".concat("")))

var output="";

for(var i=0;i<arr1.length;i++){
    output=output+arr1[i]
    for(var j=0;j<mid;j++){
        output=output + " "
    }
}
console.log(output)

for (var i = 0; i < space; i++) {

    output= output + " "

}
console.log(output);





