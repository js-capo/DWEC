// Paso Previo
const numbers = [];
for (let i = 1; i <= 50; i++) {
  numbers.push(i);
}

// 1
const doubled = numbers.map(num => num * 2);
console.log(doubled);

// 2
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// 3
const sorted = [...evenNumbers].sort((a, b) => b - a);
console.log(sorted);