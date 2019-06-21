/**
 * @file
 * @Author: daijiulong
 * @Date:   2019/5/27
 */
const router = require('koa-router')();
const tableData = require('../b2bData.js');
console.log(tableData)

router.get('/api/b2b/maxDate', async (ctx,next) =>{
    ctx.body ={
        maxDate:'2019-05-25'
    }
});


router.get('/api/b2b/data', async (ctx,next) =>{
    ctx.body = tableData;
});

module.exports = router;
