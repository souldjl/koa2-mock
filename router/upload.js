/**
 * @file
 * @Author: daijiulong
 * @Date:   2019/4/11
 */
const router = require('koa-router')();
const multer = require('koa-multer');

//文件上传
//配置
var storage = multer.diskStorage({
    //文件保存路径
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')
    },
    //修改文件名称
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split(".");  //以点分割成数组，数组的最后一项就是后缀名
        cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
});


//加载配置
var upload = multer({ storage: storage });

// upload.single('file')【file]为input type =file 的name字段
router.post('/upload', upload.single('file'), async (ctx, next) => {
    ctx.body = {
        file: ctx.req.file.filename
    };
   await next();
});

module.exports = router;