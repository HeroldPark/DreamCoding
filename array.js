'use strict';

// Array
// c. forEach
const fruits = ['👩', '👨'];
console.log('fruits : ' + fruits[0] + ", " + fruits[1]);
fruits.forEach((fruit, index) => console.log(fruit, index));

// 4. Addition, detection, copy
// push
fruits.push('👩‍🦰', '🧔');
console.log(fruits);

// pop
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift : add an tiem to the beginning
fruits.unshift('👩‍🦳', '👮‍♂️');
console.log(fruits);

// shift : remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// shift, unshift is too slower than pop, push
// splice : remove an item by index position
fruits.push('🧓', '👩‍🦱', '👸');
console.log(fruits);
fruits.splice(1, 2);
console.log(fruits);
fruits.splice(1, 1, '👱‍♂️', '🎅');
console.log(fruits);

// combine twi arrays
const fruits2 = ['👵', '👩‍🔬'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index, includes
console.clear();
console.log(fruits);
console.log(fruits.indexOf('👩'));
console.log(fruits.includes('👩'));

// lastIndexOf
console.clear();
fruits.push('👧');
console.log(fruits);
console.log(fruits.indexOf('👱‍♂️'));
console.log(fruits.lastIndexOf('👧'));


