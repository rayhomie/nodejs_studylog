// 1.引入mongoose
const mongoose = require('mongoose');

// 2.连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/');

// 3.定义一个Schema 
// Schema里面的对象和数据库表里面的字段需要一一对应
var UserSchema = mongoose.Schema({
    name: String,
    age: Number,
    status: 'number'
})

// 4.定义数据库模型Model，操作数据库
/* 
    var User = mongoose.model('User', UserSchema)
    model的第一个参数 要注意：1.首字母大写，
    2.要和数据库表(集合)名称对应关联起来，
    3.默认是和表名为复数的表进行关联
    （此时第一个参数是User，关联的数据库中的表为users）

    var User = mongoose.model('User', UserSchema, 'user')
    第二个参数：需要传入声明好的Schema
    第三个参数：指定我们需要映射的数据库中的表名叫user
    （此时第一个参数是User，关联的数据库中的表为user）
*/
var User = mongoose.model('User', UserSchema, 'user')

// 5.查询user表的数据
User.find({}, (err, doc) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(doc)
})

/* 6.增加数据
·6.1实例化model，创建增加数据
·6.2实例.save()
*/
var instance = new User({
    name: 'lisi',
    age: 20,
    status: 1
})
instance.save((err, doc) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(doc)
})//执行增加操作

// 7.修改数据
User.updateOne(
    { "_id": "23213213" },
    { name: 'wangwu', age: 18, status: 0 },
    (err, doc) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(doc)
    }
)

// 8.删除数据
User.deleteOne(
    { "_id": "23213213" },
    (err, doc) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(doc)
    }
)