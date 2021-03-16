const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('用户登录')
})

router.get('/loginOut', (req, res) => {
    res.send('用户退出登录')
})


module.exports = router