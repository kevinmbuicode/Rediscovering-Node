// const fsPromises = require('fs').promises;
// const path = require('path');

// const fileOPs = async() => {
//     try{
//         const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
//         console.log(data)
//         await fsPromises.writeFile(path.join(__dirname, 'file', 'promiseWrite.txt'), data);
//         await fsPromises.appendFile(path.join(__dirname, 'file', 'promiseWrite.txt'), 'Nice to Meet you.')
//         await fsPromises.rename(path.join(__dirname, 'file', 'promiseWrite.txt'), path.join(__dirname, 'file', 'promiseComplete.txt'))
//         const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promisesComplete.txt'), 'utf8');
//         console.log(newData)
//     } catch (err){
//         console.log(`There was an error: ${err}`)
//     }
// }

// fileOPs();

// // fs.readFile(path.join(__dirname, 'files', 'starter.txt'), (err, data) => {
// //     if (err) throw err;
// //     console.log(data.toString())
// // })


// // fs.writeFile(path.join(__dirname, 'files', 'ply.txt'), 'Nice to meet you', (err) => {
// //     if (err) throw err;
// //     console.log("Write complete")
// // })


// // fs.appendFile(path.join(__dirname, 'files', 'ply.txt'), 'Nice to meet you too', (err) => {
// //     if (err) throw err;
// //     console.log("Append complete")
// // })



// //exit on uncaught errors
// process.on('uncaughtException', err => {
//     console.log(`There was an uncaught error: ${err}`)
//     process.exit(1);
// })

const { format } = require('date-fns');
const { v4: uuid} = require('uuid');

console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'))
console.log(uuid())