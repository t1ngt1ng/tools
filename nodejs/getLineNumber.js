/**
 *  author      : t1ng
 *  createTime  : 2018/12/31
 *  description :获取文档行数
 */


let readLine = require('readline');
let fs = require('fs');

let rl = readLine.createInterface({
    input: fs.createReadStream('./test.txt')
})

let lineNum = 0;
rl.on('line', function (line) {
    lineNum++
})

rl.on('close', function () {
    console.log('lineNum', lineNum)
})