//关于async 中return 和 return await 的差异
console.log('return promise:', (async () => {
  return new Promise((resolve, reject) => {
    resolve(1)
  })
})().then(d => console.log('return promise:', d)))

console.log('return await promise:', (async () => {
  return await new Promise((resolve, reject) => {
    resolve(1)
  })
})().then(d => console.log('return await promise:', d)))

console.log('return const:', (async () => {
  return 1
})().then(d => console.log('return const:', d)))

console.log('return await const:', (async () => {
  return await 1
})().then(d => console.log('return await const:', d)))

console.log('no return:', (async () => {
  await 1
})().then(d => console.log('no return:', d)))

console.log('return null:', (async () => {
  return
})().then(d => console.log('return null:', d)))
/*
    return promise: Promise { <pending> }
    return await promise: Promise { <pending> }
    return const: Promise { <pending> }
    return await const: Promise { <pending> }
    no return: Promise { <pending> }
    return null: Promise { <pending> }
    return const: 1
    return null: undefined
    return await promise: 1
    return await const: 1
    no return: undefined
    return promise: 1
*/
