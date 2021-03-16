const koa = require('koa')

const app = new koa()

const router = require('koa-router')()

const DB = require('./module/db')

router.get('/', async (ctx) => {
  const res = await DB.find('user', {})
  ctx.body = res
})

router.get('/add', async (ctx) => {
  const res = await DB.insert('user', { username: 'lisi', age: 2 })
  ctx.body = res
})

router.get('/update', async (ctx) => {
  const res = await DB.update('user', { 'username': 'lisi' }, { age: 0 })
  ctx.body = res
})

router.get('/delete', async (ctx) => {
  const res = await DB.delete('user', { 'username': 'lisi' })
  ctx.body = res
})

app.use(router.routes())// 作用：启动路由
  .use(router.allowedMethods())

app.listen(3000)
