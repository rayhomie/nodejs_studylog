const express = require('express')
const router = express.Router()
const user = require('./user')
const login = require('./login')
const nav = require('./nav')

router.get('/', (req, res) => {
    res.send('后台管理中心')
})

// 挂载子路由
router.use('/user', user)

router.use('/login', login)

router.use('/nav', nav)



module.exports = router