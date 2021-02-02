const express = require('express')
const app = express()
const admin = require('./routes/admin')
const index = require('./routes/index')
const api = require('./routes/api')

app.listen(3000)//异步最后执行

app.use((req, res, next) => {/*匹配任何路由*/
    console.log(new Date())
    next();/*表示匹配完成这个中间件以后程序继续向下执行*/
})

//挂载配置路由模块
app.use('/admin', admin)

app.use('/api', api)

app.use('/', index)



