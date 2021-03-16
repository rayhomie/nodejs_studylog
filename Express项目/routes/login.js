var express = require('express')
var router = express.Router()

router.get('/login', (req, res) => {
    // 设置cookie（maxAge单位ms）
    res.cookie('username', '张三', { maxAge: 1000 * 60 * 60, signed: true })
    // 设置session
    req.session.age = 100000
    res.send('登录页面')
})


//退出登录
router.get('/loginOut', (req, res) => {
    //方法一、设置session的过期时间为0
    req.session.cookie.maxAge = 0//（弊端：但是所有的session都过期了）
    res.send("退出登录")
})



module.exports = router