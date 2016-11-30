var num1 = (1 * 1) + (2 * 2) + (3 * 3) + (4 * 4) + (5 * 5) + (6 * 6) + (7 * 7) + (8 * 8) + (9 * 9) + (10 * 10);
var num2 = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10;
num2 *= num2;
console.log(num1);
console.log(num2);
console.log("The difference is " + (num2 - num1));

num1 = 0;
num2 = 0;

for (var i = 1; i <= 10; i++) {
  num1 += Math.pow(i, 2);
  num2 += i;
  if (i === 10) {
    num2 *= num2;
  }
}
console.log(num1);
console.log(num2);
console.log("The difference is " + (num2 - num1));
