/*
//http模块
var http = require('http');
http.createServer((request, response) => {
  console.log(request.url)//获取url
  response.writeHead(200, { 'Content-Type': 'text/plain;charset="utf-8"' })
  response.end('Hello 哈哈哈 ' + request.url)
}).listen(8039, () => console.log('Server running at http://localhost:8039/'))
*/

/*
//url模块
var url = require('url')
console.log(url.parse('http://user:pass@sub.host.com:8080/p/a/t/h?skip=0&limit=10#hash', true))
*/

/*
//判断是否为文件或者目录
var fs = require('fs')
fs.stat('/', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`是文件：${data.isFile()}`)
  console.log(`是目录：${data.isDirectory()}`)
})
*/

/*
//创建目录
var fs = require('fs')
fs.mkdir('./css',err=>{
  if(err){
    console.log(err);
    return;
  }
  console.log('创建成功')
})
*/

/*
//创建文件并写入内容（或替换文件并写入内容）
var fs = require('fs')
fs.writeFile('./index.txt','你好',err=>{
  if(err){
    console.log(err);
    return;
  }
  console.log('创建并写入文件成功')
})
*/

/*
//文件追加内容
var fs = require('fs')
fs.appendFile('./index.txt','你好',err=>{
  if(err){
    console.log(err);
    return;
  }
  console.log('文件追加内容成功')
})
*/

/*
//读取文件内容
var fs = require('fs')
fs.readFile('./index.txt',(err,data:Buffer)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log('读取的内容是：',data)//默认是读取到十六进制的buffer数据
  console.log(data.toString())//需要转成字符串
})
*/

/*
//读取目录（将所以的文件名或目录名存在数组中）
var fs = require('fs')
fs.readFile('./',(err,data:Array)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log(data)//['fliename1.html','js','filename2.css']
})
*/

/*
//1.重命名 2.移动文件
var fs = require('fs')
fs.readFile('./css/aaa.css','./css/index.css',err=>{
  if(err){
    console.log(err);
    return;
  }
  console.log('文件重命名成功')
})
fs.readFile('./css/aaa.css','./html/index.css',err=>{
  if(err){
    console.log(err);
    return;
  }
  console.log('文件移动成功')
})
*/

/*
//删除目录
var fs = require('fs')
fs.readFile('./css',err=>{
  if(err){
    console.log(err);
    return;
  }
  console.log('删除目录成功')
})
*/

/*
//删除文件
var fs = require('fs')
fs.unlink('./css/aaa.css',err=>{
  if(err){
    console.log(err);
    return;
  }
  console.log('删除文件成功')
})
*/

