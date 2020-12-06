//关于async 中return 和 return await 的差异
console.log('return:', (async () => {
  return new Promise((resolve, reject) => {
    resolve(1)
  })
})().then(d => console.log('return:', d)))

console.log('return await:', (async () => {
  return await new Promise((resolve, reject) => {
    resolve(1)
  })
})().then(d => console.log('return await:', d)))