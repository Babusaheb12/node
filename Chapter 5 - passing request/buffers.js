const buffer = Buffer.from('Hello, World!');

console.log(buffer);
console.log(buffer.toString());

buffer.write('learning');

console.log(buffer);
console.log(buffer.toString());