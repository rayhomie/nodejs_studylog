const url = require('url')
const path = require('path')
const fs = require('fs')

const server = () => {//将路由放在局部作用域中

  const GLOBAL = {
    //把get和post的路由分开存
    _get: {},
    _post: {},
    _static: 'static',//如果不指定默认静态目录
  }

  const app = (req, res) => {
    //初始化配置静态目录（首先在静态目录上找url对应的东西，如果没有再走接口逻辑）
    initStatic(req, res, GLOBAL._static);

    //拓展res的方法
    expandRes(res)

    //获取请求的pathname
    const path_name = url.parse(req.url).pathname

    //获取请求类型
    const method = req.method.toLowerCase()

    if (GLOBAL['_' + method][path_name]) {//判断是否存在

      if (method === 'get') {
        GLOBAL._get[path_name](req, res)//执行
      }

      if (method === 'post') {
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
      res.writeHead(404, { 'Content-type': 'text/plain;charset=utf-8' })
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

  app.static = (_static) => {
    //静态web服务
    GLOBAL._static = _static
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
      res.writeHead(200, { 'Content-type': 'text/plain;charset=utf-8' })
    }
    res.end(data)
  }
}

//静态web服务中间件
const initStatic = (req, res, static_path) => {
  //获取地址
  let path_name = url.parse(req.url).pathname
  path_name = path_name === '/' ? '/index.html' : path_name
  //如果请求的url有后缀名
  let ext_name = path.extname(path_name)

  //通过fs模块读取文件
  try {
    let data = fs.readFileSync('./' + static_path + path_name)
    if (data) {//如果在静态目录上找到相应的文件，则去匹配对应的Content-type，设置响应头并返回结果
      let contentType = getContentType(ext_name)
      res.writeHead(200, { 'Content-type': '' + contentType + ';charset=utf-8' })
      res.end(data)
    }
  } catch (error) {

  }
}

const getContentType = (extname) => {//去字典中查不同后缀名文件对应的content-type值
  let data = fs.readFileSync('./utils/ContentType.json')
  let CONTENT_TYPE_MAP = JSON.parse(data.toString())
  return CONTENT_TYPE_MAP[extname]
}

module.exports = server()//导出app