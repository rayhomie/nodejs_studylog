// 1.引入mongoose
const mongoose = require('mongoose');

// 2.连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/', { useNewUrlParser: true }, err => {
    if (err) {
        console.log(err)
        return;
    }
    console.log('数据库连接成功')
})

module.exports = mongoose