const Koa = require('koa')

const app = new Koa()

const router = require('koa-router')()

const admin = require('./routes/admin')

const api = require('./routes/api')


router.get('/', async (ctx) => {
  ctx.body = '这是一个首页'
})

// 配置admin 层级子路由
router.use('/admin', admin)

// 配置api 层级子路由
router.use('/api', api)

app.use(router.routes())// 作用：启动路由
  .use(router.allowedMethods())

app.listen(3000, () => {
  console.log('已启动3000端口')
})