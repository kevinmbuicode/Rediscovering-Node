const fsPromises = require('fs').promises;
const path = require('path');

// const fileOPs = async() => {
//     try{
//         const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
//         console.log(data)
//     } catch (err){
//         console.log(`There was an error: ${err}`)
//     }
// }

// fileOPs();

fs.readFile(path.join(__dirname, 'files', 'starter.txt'), (err, data) => {
    if (err) throw err;
    console.log(data.toString())
})


fs.writeFile(path.join(__dirname, 'files', 'ply.txt'), 'Nice to meet you', (err) => {
    if (err) throw err;
    console.log("Write complete")
})


fs.appendFile(path.join(__dirname, 'files', 'ply.txt'), 'Nice to meet you too', (err) => {
    if (err) throw err;
    console.log("Append complete")
})



//exit on uncaught errors
process.on('uncaughtException', err => {
    console.log(`There was an uncaught error: ${err}`)
    process.exit(1);
})