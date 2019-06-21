/**
 * @file
 * @Author: daijiulong
 * @Date:   2019/4/23
 */
const router = require('koa-router')();

router.get('/api/maxDate', async (ctx,next) =>{
    ctx.body ={
        maxDate:'2019-04-23'
    }
})

module.exports = router;
