const url = require('url')
const fs = require('fs')

let app = {
  //静态服务
  static: (req, res, static_path) => {
    const path = url.parse(req.url).pathname
    path_name = path === '/' ? '/index.html' : path
    if (path_name !== '/favicon.ico') {
      try {//可设置服务器的静态文件目录
        const data = fs.readFileSync('./' + static_path + path_name)
        if (data) {
          res.end(data)
        }
      } catch (error) {
        console.error(error)
      }
    }
  },
  login: (req, res) => {
    //登录接口
    res.end('login')
  },
  new: (req, res) => {
    //新建接口
    res.end('new')
  },
  notFound: (req, res) => {
    //404接口
    res.end('API 404 ERROR !!!')
  }
}

module.exports = app