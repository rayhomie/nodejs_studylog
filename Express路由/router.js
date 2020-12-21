const url = require('url')

const GLOBAL = {}

const app = (req, res) => {
  const path_name = url.parse(req.url).pathname
  if (GLOBAL[path_name]) {
    GLOBAL[path_name](req, res)//执行
  } else {
    res.writeHead(404, { 'Content-type': 'text/plain;charset="utf-8"' })
    res.end('页面不存在')
  }
}

app.get = (api, callback) => {
  //注册方法
  GLOBAL[api] = callback
}

app.post = () => {

}

module.exports = app