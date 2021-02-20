const koa = require('koa')

const app = new koa()

// 配置路由

// 中间件

/* express写法
app.use((req,res,next) =>{
    res.send('返回数据')
})
*/

app.use(async (ctx) => {
    ctx.body = '你好 koa2'
})

app.listen(3000)