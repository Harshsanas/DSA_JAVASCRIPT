let array = [];
for (var i = 1; i <= 100; i++)
  while (array.length < 10) {
    array.push(Math.floor(Math.random(i) * 100));
  }
console.log(array);
