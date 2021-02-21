const koa = require('koa')

const app = new koa()
const router = require('koa-router')()

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

router.get('/news', async (ctx) => {
    ctx.body = '新闻列表页面'
})
// GET传值
router.get('/newscontent', async (ctx) => {
    // 访问地址http://localhost:3000/newscontent?aid=233&name=zhangsan
    // 方式一：从ctx中读取get传值
    console.log(ctx.query)// { aid:'233', name:'zhangsan'}获取的是对象，用的最多的方式
    console.log(ctx.querystring)// aid=233&name=zhangsan获取的是一个字符串
    console.log(ctx.url)// /newscontent?aid=233&name=zhangsan
    // 方式二：ctx里面的request里面获取get传值
    console.log(ctx.request.query)// { aid:'233', name:'zhangsan' }
    console.log(ctx.request.querystring)// aid=233&name=zhangsan
    console.log(ctx.request.url)// /newscontent?aid=233&name=zhangsan
    ctx.body = '新闻详情'
})

// 动态路由
router.get('/', async (ctx) => {

})

app.listen(3000)