const fs = require('fs');

const readStream = fs.createReadStream('write.txt', 'utf8');

const writeStream = fs.createWriteStream('read.txt');

readStream.on('data', (chunk) => {
    console.log('--- New Chunk ---');
    console.log(chunk);

    writeStream.write('\n--- New Chunk ---\n');
    writeStream.write(chunk);
});

readStream.on('end', () => {
    console.log('File copied successfully.');
});

readStream.on('error', (err) => {
    console.error(err);
});