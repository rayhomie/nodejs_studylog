const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('用户列表')
})

router.get('/add', (req, res) => {
    res.send('增加用户')
})

router.get('/edit', (req, res) => {
    res.send('编辑列表')
})

router.get('/doAdd', (req, res) => {
    res.send('执行添加')
})

router.get('/doAdd', (req, res) => {
    res.send('执行修改')
})

module.exports = router