/**
 * @file
 * @Author: daijiulong
 * @Date:   2019/4/3
 */
const router = require('koa-router')();
let Mock = require('mockjs')
router.get('/api/user/id', async (ctx, next) => {
    ctx.body = Mock.mock({
        data: '数据获取成功',
        code: 0,
        msg: '请求成功'
    })
});
module.exports = router;
