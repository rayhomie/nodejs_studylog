// 封装db类库

const { MongoClient } = require('mongodb')

const { dbUrl, dbName } = require('./config')

class Db {
  static getInstance() {// 为了实现单例模式(多次实例化实例不共享的问题)
    if (!Db.instance) {
      Db.instance = new Db()
    }
    return Db.instance
  }
  constructor() {
    this.dbClient = '';/*构造函数中存属性放db对象(解决数据库多次连接问题而提升效率)*/
    this.connect()
  }

  connect() {/*连接数据库*/
    return new Promise((resolve, reject) => {
      if (!this.dbClient) {
        MongoClient.connect(dbUrl, { useUnifiedTopology: true }, (err, client) => {
          if (err) {
            reject(err);
            return;
          }
          const db = client.db(dbName)
          this.dbClient = db// 存放在构造函数中（为了解决数据库多次连接问题）
          resolve(this.dbClient)
        })
      } else {
        // 如果构造函数中有dbClient对象
        resolve(this.dbClient)
      }
    })
  }

  find(collectionName, json) {
    return new Promise((resolve, reject) => {
      this.connect().then((db) => {
        const result = db.collection(collectionName).find(json)
        result.toArray((err, docs) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(docs)
        })
      })
    })
  }

  insert(collectionName, json) {
    return new Promise((resolve, reject) => {
      this.connect().then((db) => {
        db.collection(collectionName).insertOne(json, (err, docs) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(docs)
        })
      })
    })
  }

  update(collectionName, json1, json2) {
    return new Promise((resolve, reject) => {
      this.connect().then((db) => {
        db.collection(collectionName).updateOne(
          json1,
          { $set: json2 },
          (err, docs) => {
            if (err) {
              reject(err);
              return;
            }
            resolve(docs)
          })
      })
    })
  }
}

module.exports = Db.getInstance()

// const myDB1 = Db.getInstance()
// setTimeout(() => {
//   console.time('time1')
//   myDB1.find('user', {}).then(data => {
//     // console.log(data)
//     console.timeEnd('time1');
//   })
// }, 100)
// setTimeout(() => {
//   console.time('time2')
//   myDB1.find('user', {}).then(data => {
//     // console.log(data)
//     console.timeEnd('time2');
//   })
// }, 1000)


// const myDB2 = Db.getInstance()
// setTimeout(() => {
//   console.time('time3')
//   myDB2.find('user', {}).then(data => {
//     // console.log(data)
//     console.timeEnd('time3');
//   })
// }, 1500)
// setTimeout(() => {
//   console.time('time4')
//   myDB2.find('user', {}).then(data => {
//     // console.log(data)
//     console.timeEnd('time4');
//   })
// }, 2000)
