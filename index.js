const fs = require('fs');

fs.readFile('./files/starter.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString())
})

//exit on uncaught errors
process.on('uncaughtException', err => {
    console.log(`There was an uncaught error: ${err}`)
    process.exit(1);
})