/**
 *  author      : t1ng
 *  createTime  : 2018/12/31
 *  description :获取文档长度，中文算1，一个英文字符算1，标点空格都计入,回车算1
 */


let fs=require('fs');
let readStream=fs.createReadStream('./test.txt');

let length=0;
readStream.on('data',function (chunk) {

    length+=chunk.toString().length
})

readStream.on('end',function () {
    console.log(length)
})