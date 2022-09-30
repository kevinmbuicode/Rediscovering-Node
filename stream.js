const fs = require('fs');

// For working with large amounts of data
const rs = fs.createReadStream('./files/lorem.txt', { encoding: 'utf8'});

const ws = fs.createWriteStream('./files/new-lorem.txt');

// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk);
// })

//Other way to do above function
rs.pipe(ws);