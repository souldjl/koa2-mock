/**
 * @file
 * @Author: daijiulong
 * @Date:   2019/4/3
 */
const router = require('koa-router')();
let Mock = require('mockjs')
router.get('/api/user/list', async (ctx, next) => {
    console.log('sss');
    ctx.body = Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|1-10': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1,
            'name': '鸿基梦',
        }],
        code: 0,
        msg: '请求成功'
    })
});

router.get('/api/user/getUserInfo', async (ctx, next) => {
    ctx.body = Mock.mock({
        data: [{
            "id": 1,
            "title": "鸿基梦",
            "url": 'http://hjm100.cn',
        },{
            "id": 2,
            "title": "About",
            "url": 'https://hjm100.cn/about/',
        },{
            "id": 3,
            "title": "Blog",
            "url": 'https://hjm100.cn/Blogs',
        },{
            "id": 4,
            "title": "Github",
            "url": 'https://github.com/hjm100',
        },
        ],
        code: 0,
        msg: '请求成功'
    })
});
module.exports = router;
