// 后台管理模块
const router = require('koa-router')()

router.get('/', async (ctx) => {
  ctx.body = '后台管理模块首页'
})
router.get('/add', async (ctx) => {
  ctx.body = '后台管理模块添加数据'
})
router.get('/delete', async (ctx) => {
  ctx.body = '后台管理模块删除数据'
})
router.get('/update', async (ctx) => {
  ctx.body = '后台管理模块更新数据'
})

module.exports = router.routes()