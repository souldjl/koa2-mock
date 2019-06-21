/**
 * @file
 * @Author: daijiulong
 * @Date:   2019/4/3
 */
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');
const path = require('path');
const static = require('koa-static');
const fs = require('fs');
const compress = require('koa-compress'); //开启gzip压缩


// koa会全部应用所有的 中间件，再匹配路由
// next 前面必须放await

const port = '3033';
const app = new Koa();

app.use(bodyParser());

// app.use(compress({
//     threshold: 2048
// }));

app.use(static(
    path.join(__dirname,'public')
));

app.use(cors({
    origin: function(ctx) {
        if (ctx.url === '/test') {
            return '*';
        }
        return 'http://172.24.134.223:8380'; // 允许请求访问的域
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));


app.use(async(ctx,next) => {
    await next();
    if (ctx.status === 404){
        ctx.body = '404'
    }
});


app.use(async (ctx, next) => {
   let s_date = new Date();
   await next(); // 必须加上await 否则所有请求都404
   let e_date = new Date();
   console.log(`the server responsed at ${e_date - s_date}ms`);
   console.log('ctx.query',ctx.query);
   console.log('ctx.queryString',ctx.querystring);
});


// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});


// const mock = require('./router/mock');
// const user = require('./router/user');
// const incomeAnalysis = require('./router/incomeAnalysis');
// const index = require('./router/index');
// const upload = require('./router/upload');
//
//
// app.use(index.routes());
// 假如routes文件新增一个路径就的在下面增加路径
// app.use(mock.routes());
// app.use(user.routes());
// app.use(incomeAnalysis.routes());
// app.use(upload.routes());

//  将路由信息 抽象出来,利用nodejs的fs模块，直接循环
let files = fs.readdirSync(__dirname + '/router');
let js_files = files.filter((f) => {
    return f.endsWith('.js');
});

for (let i=0;i<js_files.length; i++){
    app.use(require('./router/'+ js_files[i]).routes())
    console.log(js_files[i])
}


const config = require('./common/config');
console.log(config);

app.listen(port, () => {
    console.log(`app is listening on http://localhost:${port}`);
});
