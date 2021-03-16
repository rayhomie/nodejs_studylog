const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('导航')
})

router.get('/add', (req, res) => {
    res.send('添加导航')
})

router.get('/delete', (req, res) => {
    res.send('删除导航')
})

module.exports = router