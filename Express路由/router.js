const url = require('url')

const server = () => {//将路由放在局部作用域中

  const GLOBAL = {}
  //把get和post的路由分开存
  GLOBAL._get = {}
  GLOBAL._post = {}

  const app = (req, res) => {
    //拓展res的方法
    expandRes(res)
    //获取请求的pathname
    const path_name = url.parse(req.url).pathname
    //获取请求类型
    const method = req.method.toLowerCase()
    if (GLOBAL['_' + method][path_name]) {//判断是否存在
      if (method === 'get') {
        GLOBAL._get[path_name](req, res)//执行
      } else {
        //接收post传值，把它绑定到req.body
        let postData = ''
        req.on('data', (chunk) => {
          postData += chunk
        })
        req.on('end', () => {
          //将接收到的请求数据存放在req.body里
          req.body = postData
          GLOBAL._post[path_name](req, res)//执行
        })
      }
    } else {
      res.writeHead(404, { 'Content-type': 'text/plain;charset="utf-8"' })
      res.end('页面不存在')
    }
  }

  app.get = (api, callback) => {
    //注册方法
    GLOBAL._get[api] = callback
  }

  app.post = (api, callback) => {
    //注册方法
    GLOBAL._post[api] = callback
  }

  return app
}

//拓展res
const expandRes = (res) => {
  //封装res.send函数(设置响应头和响应数据)
  res.send = (data, config) => {
    if (config) {
      const status = config['status']
      delete config['status']
      res.writeHead(status, { ...config })
    } else {
      res.writeHead(200, { 'Content-type': 'text/plain;charset="utf-8"' })
    }


    res.end(data)
  }
}

module.exports = server()//导出app