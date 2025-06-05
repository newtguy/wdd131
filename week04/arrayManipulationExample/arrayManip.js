let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];

let namesB = names.filter(aName => aName.charAt(0) === 'B');

let namesLength = names.map(aName => aName.length);

let averageLength = namesLength.reduce((sum, length) => sum + length, 0) / namesLength.length;

console.log(namesB);          // ["Blessing", "Bob"]
console.log(averageLength);   // Average length of all names

// Could also be this:
// names.reduce((total, name) => total + name.length, 0) / names.length;
