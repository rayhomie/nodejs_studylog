const url = require('url')
const fs = require('fs')

let app = {
  //静态服务
  static: (req, res, static_path) => {
    const path = url.parse(req.url).pathname
    path_name = path === '/' ? '/index.html' : path
    if (path_name !== '/favicon.ico') {
      try {//可设置服务器的静态文件目录
        const data = fs.readFileSync('./' + static_path + path_name)
        if (data) {
          res.end(data)
        }
      } catch (error) {
        console.error(error)
      }
    }
  },
  login: (req, res) => {
    //登录接口
    res.end('login')
  },
  new: (req, res) => {
    //新建接口
    res.end('new')
  },
  list: (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json;charset="utf-8"' })
    res.end(JSON.stringify([
      {
        user_avatar:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608355450900&di=d98f475773383c137c0e25906ffe6bdb&imgtype=0&src=http%3A%2F%2Fww3.sinaimg.cn%2Fmw690%2F861756fcly1ge2vvvx5zzj20k00k0465.jpg',
        id: '1',
        question: '为什么下架？',
        hit_standard_q: '商品下架',
        report_type: '出错',
        report_from: '点击',
        spin: 'xd2313123',
        status: '已处理',
        feedback: '已反馈',
        create_time: '2020-12-15 19:12:33',
        update_time: '2020-12-15 19:12:33',
        focus_goods_url:
          'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1952141756,1435646288&fm=26&gp=0.jpg',
        focus_goods_img:
          'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1952141756,1435646288&fm=26&gp=0.jpg',
        focus_goods_name: '潮牌ins反光短袖t恤男生夏季衣服潮流2020半袖嘻哈纯棉港风五分袖',
        utterance: [
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 3,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 2,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 3,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '为什么下架了了亲',
            role: 2,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: true,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 2,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 2,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 2,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 2,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 2,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 2,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 2,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 2,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 2,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 2,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 2,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 2,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
        ],
      },
      {
        user_avatar:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608384722668&di=dadab323546a1cec2b95939fd56e15b4&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn19%2F0%2Fw400h400%2F20180910%2F3391-hiycyfw5413589.jpg',
        id: '2',
        question: '为什么上架？',
        hit_standard_q: '商品上架',
        report_type: '出错',
        report_from: '点击',
        spin: 'tb128232',
        status: '已处理',
        feedback: '已反馈',
        create_time: '2020-12-15 19:12:33',
        update_time: '2020-12-15 19:12:33',
        focus_goods_url:
          'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3846834685,2873033014&fm=26&gp=0.jpg',
        focus_goods_img:
          'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3846834685,2873033014&fm=26&gp=0.jpg',
        focus_goods_name: '雪地靴冬季防水防滑高帮男鞋东北户外棉鞋加绒加厚保暖大码棉靴子',
        utterance: [
          {
            text: '为什么上架了呢为什么呀',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 2,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 3,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 2,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: true,
          },
        ],
      },
      {
        user_avatar:
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2005958560,2391203436&fm=26&gp=0.jpg',
        id: '3',
        question: '肚子饿了呢？',
        hit_standard_q: '买家问题',
        report_type: '出错',
        report_from: '点击',
        spin: 'jd33123123',
        status: '已处理',
        feedback: '已反馈',
        create_time: '2020-12-15 19:12:33',
        update_time: '2020-12-15 19:12:33',
        focus_goods_url:
          'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1261795149,1826801208&fm=26&gp=0.jpg',
        focus_goods_img:
          'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1261795149,1826801208&fm=26&gp=0.jpg',
        focus_goods_name: '秋冬灯芯绒裤子男宽松束脚裤冬季加绒加厚休闲卫裤潮牌男裤工装裤',
        utterance: [
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '肚子饿了呢？',
            role: 2,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: true,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 3,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
        ],
      },
      //断开
      {
        user_avatar:
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2005958560,2391203436&fm=26&gp=0.jpg',
        id: '4',
        question: '肚子饿了呢？',
        hit_standard_q: '买家问题',
        report_type: '出错',
        report_from: '点击',
        spin: 'jd33123123',
        status: '已处理',
        feedback: '已反馈',
        create_time: '2020-12-15 19:12:33',
        update_time: '2020-12-15 19:12:33',
        focus_goods_url:
          'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1261795149,1826801208&fm=26&gp=0.jpg',
        focus_goods_img:
          'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1261795149,1826801208&fm=26&gp=0.jpg',
        focus_goods_name: '秋冬灯芯绒裤子男宽松束脚裤冬季加绒加厚休闲卫裤潮牌男裤工装裤',
        utterance: [
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '肚子饿了呢？',
            role: 2,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: true,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 3,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
        ],
      },
      {
        user_avatar:
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2005958560,2391203436&fm=26&gp=0.jpg',
        id: '5',
        question: '肚子饿了呢？',
        hit_standard_q: '买家问题',
        report_type: '出错',
        report_from: '点击',
        spin: 'jd33123123',
        status: '已处理',
        feedback: '已反馈',
        create_time: '2020-12-15 19:12:33',
        update_time: '2020-12-15 19:12:33',
        focus_goods_url:
          'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1261795149,1826801208&fm=26&gp=0.jpg',
        focus_goods_img:
          'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1261795149,1826801208&fm=26&gp=0.jpg',
        focus_goods_name: '秋冬灯芯绒裤子男宽松束脚裤冬季加绒加厚休闲卫裤潮牌男裤工装裤',
        utterance: [
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '肚子饿了呢？',
            role: 2,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: true,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 3,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
        ],
      },
      {
        user_avatar:
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2005958560,2391203436&fm=26&gp=0.jpg',
        id: '6',
        question: '肚子饿了呢？',
        hit_standard_q: '买家问题',
        report_type: '出错',
        report_from: '点击',
        spin: 'jd33123123',
        status: '已处理',
        feedback: '已反馈',
        create_time: '2020-12-15 19:12:33',
        update_time: '2020-12-15 19:12:33',
        focus_goods_url:
          'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1261795149,1826801208&fm=26&gp=0.jpg',
        focus_goods_img:
          'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1261795149,1826801208&fm=26&gp=0.jpg',
        focus_goods_name: '秋冬灯芯绒裤子男宽松束脚裤冬季加绒加厚休闲卫裤潮牌男裤工装裤',
        utterance: [
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '肚子饿了呢？',
            role: 2,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: true,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 3,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
        ],
      },
      {
        user_avatar:
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2005958560,2391203436&fm=26&gp=0.jpg',
        id: '7',
        question: '肚子饿了呢？',
        hit_standard_q: '买家问题',
        report_type: '出错',
        report_from: '点击',
        spin: 'jd33123123',
        status: '已处理',
        feedback: '已反馈',
        create_time: '2020-12-15 19:12:33',
        update_time: '2020-12-15 19:12:33',
        focus_goods_url:
          'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1261795149,1826801208&fm=26&gp=0.jpg',
        focus_goods_img:
          'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1261795149,1826801208&fm=26&gp=0.jpg',
        focus_goods_name: '秋冬灯芯绒裤子男宽松束脚裤冬季加绒加厚休闲卫裤潮牌男裤工装裤',
        utterance: [
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '肚子饿了呢？',
            role: 2,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: true,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 3,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
        ],
      },
      {
        user_avatar:
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2005958560,2391203436&fm=26&gp=0.jpg',
        id: '8',
        question: '肚子饿了呢？',
        hit_standard_q: '买家问题',
        report_type: '出错',
        report_from: '点击',
        spin: 'jd33123123',
        status: '已处理',
        feedback: '已反馈',
        create_time: '2020-12-15 19:12:33',
        update_time: '2020-12-15 19:12:33',
        focus_goods_url:
          'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1261795149,1826801208&fm=26&gp=0.jpg',
        focus_goods_img:
          'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1261795149,1826801208&fm=26&gp=0.jpg',
        focus_goods_name: '秋冬灯芯绒裤子男宽松束脚裤冬季加绒加厚休闲卫裤潮牌男裤工装裤',
        utterance: [
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '肚子饿了呢？',
            role: 2,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: true,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 3,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
        ],
      },
      {
        user_avatar:
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2005958560,2391203436&fm=26&gp=0.jpg',
        id: '9',
        question: '肚子饿了呢？',
        hit_standard_q: '买家问题',
        report_type: '出错',
        report_from: '点击',
        spin: 'jd33123123',
        status: '已处理',
        feedback: '已反馈',
        create_time: '2020-12-15 19:12:33',
        update_time: '2020-12-15 19:12:33',
        focus_goods_url:
          'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1261795149,1826801208&fm=26&gp=0.jpg',
        focus_goods_img:
          'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1261795149,1826801208&fm=26&gp=0.jpg',
        focus_goods_name: '秋冬灯芯绒裤子男宽松束脚裤冬季加绒加厚休闲卫裤潮牌男裤工装裤',
        utterance: [
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '肚子饿了呢？',
            role: 2,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: true,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 3,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
        ],
      },
      {
        user_avatar:
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2005958560,2391203436&fm=26&gp=0.jpg',
        id: '10',
        question: '肚子饿了呢？',
        hit_standard_q: '买家问题',
        report_type: '出错',
        report_from: '点击',
        spin: 'jd33123123',
        status: '已处理',
        feedback: '已反馈',
        create_time: '2020-12-15 19:12:33',
        update_time: '2020-12-15 19:12:33',
        focus_goods_url:
          'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1261795149,1826801208&fm=26&gp=0.jpg',
        focus_goods_img:
          'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1261795149,1826801208&fm=26&gp=0.jpg',
        focus_goods_name: '秋冬灯芯绒裤子男宽松束脚裤冬季加绒加厚休闲卫裤潮牌男裤工装裤',
        utterance: [
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '肚子饿了呢？',
            role: 2,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: true,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 3,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
        ],
      },
      {
        user_avatar:
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2005958560,2391203436&fm=26&gp=0.jpg',
        id: '11',
        question: '肚子饿了呢？',
        hit_standard_q: '买家问题',
        report_type: '出错',
        report_from: '点击',
        spin: 'jd33123123',
        status: '已处理',
        feedback: '已反馈',
        create_time: '2020-12-15 19:12:33',
        update_time: '2020-12-15 19:12:33',
        focus_goods_url:
          'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1261795149,1826801208&fm=26&gp=0.jpg',
        focus_goods_img:
          'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1261795149,1826801208&fm=26&gp=0.jpg',
        focus_goods_name: '秋冬灯芯绒裤子男宽松束脚裤冬季加绒加厚休闲卫裤潮牌男裤工装裤',
        utterance: [
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '肚子饿了呢？',
            role: 2,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: true,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 3,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
        ],
      },
      {
        user_avatar:
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2005958560,2391203436&fm=26&gp=0.jpg',
        id: '12',
        question: '肚子饿了呢？',
        hit_standard_q: '买家问题',
        report_type: '出错',
        report_from: '点击',
        spin: 'jd33123123',
        status: '已处理',
        feedback: '已反馈',
        create_time: '2020-12-15 19:12:33',
        update_time: '2020-12-15 19:12:33',
        focus_goods_url:
          'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1261795149,1826801208&fm=26&gp=0.jpg',
        focus_goods_img:
          'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1261795149,1826801208&fm=26&gp=0.jpg',
        focus_goods_name: '秋冬灯芯绒裤子男宽松束脚裤冬季加绒加厚休闲卫裤潮牌男裤工装裤',
        utterance: [
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '肚子饿了呢？',
            role: 2,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: true,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 3,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
        ],
      },
      {
        user_avatar:
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2005958560,2391203436&fm=26&gp=0.jpg',
        id: '13',
        question: '肚子饿了呢？',
        hit_standard_q: '买家问题',
        report_type: '出错',
        report_from: '点击',
        spin: 'jd33123123',
        status: '已处理',
        feedback: '已反馈',
        create_time: '2020-12-15 19:12:33',
        update_time: '2020-12-15 19:12:33',
        focus_goods_url:
          'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1261795149,1826801208&fm=26&gp=0.jpg',
        focus_goods_img:
          'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1261795149,1826801208&fm=26&gp=0.jpg',
        focus_goods_name: '秋冬灯芯绒裤子男宽松束脚裤冬季加绒加厚休闲卫裤潮牌男裤工装裤',
        utterance: [
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '肚子饿了呢？',
            role: 2,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: true,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 3,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
        ],
      },
      {
        user_avatar:
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2005958560,2391203436&fm=26&gp=0.jpg',
        id: '14',
        question: '肚子饿了呢？',
        hit_standard_q: '买家问题',
        report_type: '出错',
        report_from: '点击',
        spin: 'jd33123123',
        status: '已处理',
        feedback: '已反馈',
        create_time: '2020-12-15 19:12:33',
        update_time: '2020-12-15 19:12:33',
        focus_goods_url:
          'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1261795149,1826801208&fm=26&gp=0.jpg',
        focus_goods_img:
          'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1261795149,1826801208&fm=26&gp=0.jpg',
        focus_goods_name: '秋冬灯芯绒裤子男宽松束脚裤冬季加绒加厚休闲卫裤潮牌男裤工装裤',
        utterance: [
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '肚子饿了呢？',
            role: 2,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: true,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 3,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
        ],
      },
      {
        user_avatar:
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2005958560,2391203436&fm=26&gp=0.jpg',
        id: '15',
        question: '肚子饿了呢？',
        hit_standard_q: '买家问题',
        report_type: '出错',
        report_from: '点击',
        spin: 'jd33123123',
        status: '已处理',
        feedback: '已反馈',
        create_time: '2020-12-15 19:12:33',
        update_time: '2020-12-15 19:12:33',
        focus_goods_url:
          'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1261795149,1826801208&fm=26&gp=0.jpg',
        focus_goods_img:
          'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1261795149,1826801208&fm=26&gp=0.jpg',
        focus_goods_name: '秋冬灯芯绒裤子男宽松束脚裤冬季加绒加厚休闲卫裤潮牌男裤工装裤',
        utterance: [
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '肚子饿了呢？',
            role: 2,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: true,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 3,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
        ],
      },
      {
        user_avatar:
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2005958560,2391203436&fm=26&gp=0.jpg',
        id: '16',
        question: '肚子饿了呢？',
        hit_standard_q: '买家问题',
        report_type: '出错',
        report_from: '点击',
        spin: 'jd33123123',
        status: '已处理',
        feedback: '已反馈',
        create_time: '2020-12-15 19:12:33',
        update_time: '2020-12-15 19:12:33',
        focus_goods_url:
          'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1261795149,1826801208&fm=26&gp=0.jpg',
        focus_goods_img:
          'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1261795149,1826801208&fm=26&gp=0.jpg',
        focus_goods_name: '秋冬灯芯绒裤子男宽松束脚裤冬季加绒加厚休闲卫裤潮牌男裤工装裤',
        utterance: [
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '肚子饿了呢？',
            role: 2,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: true,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 3,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
        ],
      },
      {
        user_avatar:
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2005958560,2391203436&fm=26&gp=0.jpg',
        id: '17',
        question: '肚子饿了呢？',
        hit_standard_q: '买家问题',
        report_type: '出错',
        report_from: '点击',
        spin: 'jd33123123',
        status: '已处理',
        feedback: '已反馈',
        create_time: '2020-12-15 19:12:33',
        update_time: '2020-12-15 19:12:33',
        focus_goods_url:
          'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1261795149,1826801208&fm=26&gp=0.jpg',
        focus_goods_img:
          'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1261795149,1826801208&fm=26&gp=0.jpg',
        focus_goods_name: '秋冬灯芯绒裤子男宽松束脚裤冬季加绒加厚休闲卫裤潮牌男裤工装裤',
        utterance: [
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '肚子饿了呢？',
            role: 2,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: true,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 3,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
        ],
      },
      {
        user_avatar:
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2005958560,2391203436&fm=26&gp=0.jpg',
        id: '18',
        question: '肚子饿了呢？',
        hit_standard_q: '买家问题',
        report_type: '出错',
        report_from: '点击',
        spin: 'jd33123123',
        status: '已处理',
        feedback: '已反馈',
        create_time: '2020-12-15 19:12:33',
        update_time: '2020-12-15 19:12:33',
        focus_goods_url:
          'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1261795149,1826801208&fm=26&gp=0.jpg',
        focus_goods_img:
          'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1261795149,1826801208&fm=26&gp=0.jpg',
        focus_goods_name: '秋冬灯芯绒裤子男宽松束脚裤冬季加绒加厚休闲卫裤潮牌男裤工装裤',
        utterance: [
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '肚子饿了呢？',
            role: 2,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: true,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 3,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
        ],
      },
      {
        user_avatar:
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2005958560,2391203436&fm=26&gp=0.jpg',
        id: '19',
        question: '肚子饿了呢？',
        hit_standard_q: '买家问题',
        report_type: '出错',
        report_from: '点击',
        spin: 'jd33123123',
        status: '已处理',
        feedback: '已反馈',
        create_time: '2020-12-15 19:12:33',
        update_time: '2020-12-15 19:12:33',
        focus_goods_url:
          'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1261795149,1826801208&fm=26&gp=0.jpg',
        focus_goods_img:
          'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1261795149,1826801208&fm=26&gp=0.jpg',
        focus_goods_name: '秋冬灯芯绒裤子男宽松束脚裤冬季加绒加厚休闲卫裤潮牌男裤工装裤',
        utterance: [
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '肚子饿了呢？',
            role: 2,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: true,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 3,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
        ],
      },
      {
        user_avatar:
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2005958560,2391203436&fm=26&gp=0.jpg',
        id: '20',
        question: '肚子饿了呢？',
        hit_standard_q: '买家问题',
        report_type: '出错',
        report_from: '点击',
        spin: 'jd33123123',
        status: '已处理',
        feedback: '已反馈',
        create_time: '2020-12-15 19:12:33',
        update_time: '2020-12-15 19:12:33',
        focus_goods_url:
          'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1261795149,1826801208&fm=26&gp=0.jpg',
        focus_goods_img:
          'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1261795149,1826801208&fm=26&gp=0.jpg',
        focus_goods_name: '秋冬灯芯绒裤子男宽松束脚裤冬季加绒加厚休闲卫裤潮牌男裤工装裤',
        utterance: [
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '肚子饿了呢？',
            role: 2,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: true,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 3,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
        ],
      },
      {
        user_avatar:
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2005958560,2391203436&fm=26&gp=0.jpg',
        id: '21',
        question: '肚子饿了呢？',
        hit_standard_q: '买家问题',
        report_type: '出错',
        report_from: '点击',
        spin: 'jd33123123',
        status: '已处理',
        feedback: '已反馈',
        create_time: '2020-12-15 19:12:33',
        update_time: '2020-12-15 19:12:33',
        focus_goods_url:
          'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1261795149,1826801208&fm=26&gp=0.jpg',
        focus_goods_img:
          'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1261795149,1826801208&fm=26&gp=0.jpg',
        focus_goods_name: '秋冬灯芯绒裤子男宽松束脚裤冬季加绒加厚休闲卫裤潮牌男裤工装裤',
        utterance: [
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '肚子饿了呢？',
            role: 2,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: true,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 1,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
          {
            text: '哈哈哈哈哈哈，我知道了哦亲',
            role: 3,
            ms_time: '2020-12-15 19:12:33',
            is_badcase: false,
          },
        ],
      },
    ]))
  },
  notFound: (req, res) => {
    //404接口
    res.end('API 404 ERROR !!!')
  }
}

module.exports = app