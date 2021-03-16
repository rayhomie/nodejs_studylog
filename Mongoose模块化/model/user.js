const mongoose = require('./dbs')

var UserSchema = mongoose.Schema({
    name: String,
    age: Number,
    status: 'number',
    sex: { type: Number, default: 1 }// 可以设置默认值
})

var UserModel = mongoose.model('User', UserSchema, 'user')


module.exports = UserModel