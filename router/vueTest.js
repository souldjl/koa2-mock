/**
 * @file
 * @Author: daijiulong
 * @Date:   2019/5/1
 */
const router = require('koa-router')();

router.get('/api/list',async (ctx,next)=>{
    var n = 10*Math.random();

    if (n){
        ctx.body ={
            msg:'success' ,
            code:100,
            data:[
                {id:0,author:'张三',name:'扭转命运：重生之创业人生',image:'http://img.17k.com/cmsimg/recommend/2019/02/1551099592.9638.jpg'},
                {id:1,author:'张三',name:'扭转命运：重生之创业人生',image:'http://img.17k.com/cmsimg/recommend/2019/02/1551099592.9638.jpg'},
                {id:2,author:'张三',name:'扭转命运：重生之创业人生',image:'http://img.17k.com/cmsimg/recommend/2019/02/1551099592.9638.jpg'},
                {id:3,author:'张三',name:'扭转命运：重生之创业人生',image:'http://img.17k.com/cmsimg/recommend/2019/02/1551099592.9638.jpg'},
                {id:4,author:'张三',name:'扭转命运：重生之创业人生',image:'http://img.17k.com/cmsimg/recommend/2019/02/1551099592.9638.jpg'},
            ]
        }
    }else{
        ctx.body ={
            msg:'error,no result' ,
            code:0,
            data:[]
        }
    }


});


router.get('/api/id',async (ctx,next)=>{
    var content = '<div class="p" style="display: block;">\n' +
        '                                            　　公元2030年，Y市的某座化学研究院中，一处偌大的实验始终，四处都摆满了无数的瓶瓶罐罐，还有透明的玻璃酒精灯在燃烧着各种颜色的化学原料。<br><br>　　“陆飘，你刚毕业进来做核原料千万要小心，任何一个环节出错都会可能发生爆炸，千万小心。”这时一名老人对着一名青年男子开口说道。<br><br>　　陆飘，毕业在Y市的一所化学系专科生，年仅19岁就已经直接被研究所破格录取，而带着陆飘做实验的则是研究所中实力好的研究院院长朱皓，此次为了研究核原料的成分两人连续蹲在实验室中工作了三天三夜了。<br><br>　　“院长，我知道了，你看那氟已经烧得差不多了，该添加三硝甘油了！”说话间陆飘直接将三硝酸酐脂油加入到了燃烧着的玻璃管道中。<br><br>　　“别啊！里面有强氧化剂！”院长朱皓话才说完，可惜已经来不及了，陆飘已经将三硝酸甘油酯倒入到了管道内！<br><br>　　“快跑！”<br><br>　　“轰。。。。”<br><br>　　朱皓还未说完，整个实验室开始产生了巨大的爆炸，两个人连实验室门口都没有走出，整个实验室都在爆炸中燃烧成了齑粉。<br><br>　　…………………………<br><br>　　“嗯？我这是在哪里？”模糊之中，陆飘感觉到了自己在身在一个水地世界之中，双眼像是被什么东西粘住无法睁开，但是可以清楚的听到外面的一切声音。<br><br>　　“夫人，你说这是个男娃还是女娃啊，咱么可是和水家说好的，他们的也快生了，要都是男娃就结成兄弟，要是都是女的就成为姐妹，一男一女就是夫妻！“<br><br>　　“好了！还有两个月，到时候不就知道了么，不过水家真的可靠么？”<br><br>　　“不管可不可靠，最近上面家族越来越压榨我们的红利了，家族也很久没培育过人到家族中了！”<br><br>　　“好吧！那一切你做主就好，不过我总是担心水家会反悔！”<br><br>　　陆飘在水中世界中听到对话后，才惊讶的发现，原来自己已经在人家的肚子里中了，而且四肢无法动弹，眼睛也睁不开。<br><br>　　“苍天啊，这是在整我呢？”在心里世界陆飘大骂了一句后一股困意袭来，接着再次陷入了沉睡中。<br><br>　　在肚子里的陆飘想叫天天不灵喊地地不应，整整在肚子的羊水中两个月，其中也能听到外面的对话，也知道了一点外面的事情。<br><br>　　原来自己投生到的居然是一个叫神魂大陆的世界，神魂元录的18521年，在肚子的期间让陆飘安心的是，自己居然是投生在了一户大家族分支之中。<br><br>　　莫家，神魂大陆东郡太和帝国的大家族，自己所出生的地方则是莫家的分支，位处于圣魂村，在两个月时间陆飘清醒的时候听到的消息让陆飘大概的了解到这个新生地的大概信息。<br><br>　　神魂大陆，主要是由三种职业诞生的大陆，主要是由天赋决定了修炼，或者是无属性天赋的普通人，每一百个人中就有两到三个会出现属性天赋。<br><br>　　天赋又分成法魂、武魂、毒魂，拥有毒魂天赋的人将来必定是成为毒魂师，法魂的就是法魂师，武魂的则是武魂师。<br><br>　　帝国中的大家族为了培育自己家族的魂师概率，于是在世界各地都划分了很多的家族分支，当分支家族中培育出了能力十分强大的魂师时，就会被帝国的主家收入家族内，成为正式的家族成员。<br><br>　　两个月的时间很快就过去，就在这一天，陆飘终于感觉到了自己被水流不断的冲击着，随后陆飘只感觉到自己在环绕着水打转，整个人都开始昏昏沉沉的。<br><br>　　“家主，夫人要生了！”<br><br>　　在莫家的大院外，一名侍女急忙的从主屋内跑了出来，朝着院子站着的一名中年男子大声喊了起来。<br><br>　　“哦！快，快去找稳婆，我终于要做父亲了！”<br><br>　　侍女听到后连忙的朝外面走了出去，中年男子则是在大院中开始焦急了起来，本来是想进去看看的，可是里面有侍女在照顾着，而且此时自己进去也起不到任何的作用。<br><br>　　“啊。。。。”数十分钟后，一声疼痛的呐喊声从屋内传了出来，听到声音后的莫化整个人都开始揪心了起来。<br><br>　　又是过了数分钟后，一名侍女从屋内跑了出来，双手还沾满着鲜血的侍女出来后直接跪倒在莫化的跟前道：“家主，夫人，夫人...失血过多，怕是已经撑不住了！”<br><br>　　“混账，立刻止血！”<br><br>　　“家主，夫人生出小少主的时候血流不止，恐怕已…..”<br><br>　　“闭嘴！”莫化大怒的朝侍女大喊了一声后直接就朝屋内走了进去。<br><br>　　进到屋子后，莫化才看到，此时两名侍女正在用布包裹着自己新到世界的孩子，还有躺在床上奄奄一息的夫人，此时床上全是被鲜血覆盖着，一名侍女不断的用布擦拭，但是血流一直从下面不断的流出。<br><br>　　“你们先..下去..我有.话跟家主讲...”在床上虚弱的雪如初看到了莫化进来后，微弱的声音发出，交代着身边的侍女。<br><br>　　听到夫人的话后，三名侍女识趣的离开了房间，其中的一名侍女也包好了新生出的陆飘放到了雪如初的身边就离开了房间。<br><br>　　看到所有人都离开后，莫化直接就走到了床边伸手握住雪如初的手，然后将虚弱的雪如初扶了起来，垫在自己的大腿上。<br><br>　　“莫化，你要好好带….着我们的儿子，将来…...一切都要靠你了，我可能陪不了...你了！”<br><br>　　莫化强忍住双眼的泪水，伸手轻抚了一下雪如初的秀发颤抖的道：“夫...人！你不会..有事的！我已经叫人到外面请人了！”<br><br>　　“让我看一眼..我的..儿子，听..她们说..儿子很..可爱！”<br><br>　　莫化知道，分娩时要是碰到了大出血，根本就已经没救了，本想雪如初会安心点，结果雪如初并不在意，只是想看看自己的儿子，于是莫化从床边将刚出生的陆飘抱到了雪如初的怀中。<br><br>\n' +
        '                        　　本书首发来自17K小说网，第一时间看正版内容！<br><br>\n' +
        '                        <p>　　17k出品，厉害到上天，你绝没体验过的真实空战尽在《天空之门》（各大应用市场均可下载）</p><div class="author-say"></div>\n' +
        '                        <!--二维码广告 Start-->\n' +
        '                        <div class="qrcode">\n' +
        '                            <img src="http://img.17k.com/images/ad/qrcode.jpg" alt="wap_17K" width="96" height="118">\n' +
        '                            <ul>\n' +
        '                                <li>下载17K客户端，《神魂大陆成神记》最新章节无广告纯净阅读。</li>\n' +
        '                                <li>17K客户端专享，签到即送VIP，免费读全站。</li>\n' +
        '                            </ul>\n' +
        '                        </div>\n' +
        '                        <!--二维码广告 End-->\n' +
        '                                        <div class="chapter_text_ad" id="BAIDU_933954"></div>\n' +
        '                </div>'


    let cap = ctx.query.cap || 0;

    let data =[
        {id:ctx.query.id,capter:0,content:content,author:'张三',name:'扭转命运：重生之创业人生',image:'http://img.17k.com/cmsimg/recommend/2019/02/1551099592.9638.jpg'},
        {id:ctx.query.id,capter:1,content:content,author:'张三',name:'扭转命运：重生之创业人生',image:'http://img.17k.com/cmsimg/recommend/2019/02/1551099592.9638.jpg'},
        {id:ctx.query.id,capter:2,content:content,author:'张三',name:'扭转命运：重生之创业人生',image:'http://img.17k.com/cmsimg/recommend/2019/02/1551099592.9638.jpg'},
        {id:ctx.query.id,capter:3,content:content,author:'张三',name:'扭转命运：重生之创业人生',image:'http://img.17k.com/cmsimg/recommend/2019/02/1551099592.9638.jpg'},
        {id:ctx.query.id,capter:4,content:content,author:'张三',name:'扭转命运：重生之创业人生',image:'http://img.17k.com/cmsimg/recommend/2019/02/1551099592.9638.jpg'},
        {id:ctx.query.id,capter:5,content:content,author:'张三',name:'扭转命运：重生之创业人生',image:'http://img.17k.com/cmsimg/recommend/2019/02/1551099592.9638.jpg'},
    ];

        let result = data.slice(cap,cap+2);

    ctx.body ={
        msg:'success' ,
        code:100,
        data:result
    }
});

var result = [
    {id:0,name:"zhangsan",test:"hahah",time:"2019-12-22",status:"1"},
    {id:1,name:"zhangsan",test:"hahah",time:"2019-12-22",status:"1"},
    {id:2,name:"lisan",test:"11111ah",time:"2019-12-22",status:"2"},
    {id:3,name:"zhangsan",test:"hahah",time:"2019-12-22",status:"1"},
    {id:4,name:"san",test:"3333333",time:"2019-12-22",status:"2"}
];

router.get('/api/getlist',async (ctx,next)=>{
    ctx.body ={
        msg:'success' ,
        code:100,
        data:result
    }
});


router.get('/api/addlist',async (ctx,next)=>{
    var listitem = ctx.query.item;
    listitem = JSON.parse(listitem)
    listitem.id = result.length;
    result.push(listitem)
    ctx.body ={
        msg:'success' ,
        code:100,
        data:result
    }
});

router.get('/api/edit',async (ctx,next)=>{
    let item = ctx.query.item;

    let result = [
        {id:0,name:"zhangsan",test:"hahah",time:"2015-12-22",status:"2",userId:'lisi'},
        {id:1,name:"zhangsan",test:"hahah",time:"2015-12-22",status:"1",userId:'lisi'},
        {id:2,name:"lisan",test:"11111ah",time:"2016-12-22",status:"2",userId:'zhangsan'},
        {id:3,name:"zhangsan",test:"hahah",time:"2017-12-22",status:"1",userId:'lisi'},
        {id:4,name:"san",test:"3333333",time:"2018-12-22",status:"2",userId:'zhangsan'},
        {id:4,name:"san",test:"3333333",time:"2018-12-22",status:"2",userId:'zhangsan'}

    ];

    let result2 = [
        {id:0,name:"zhangsan",test:"hahah",time:"2019-12-22",status:"1",userId:'zs'}
    ];

    ctx.body ={
        msg:'success' ,
        code:100,
        data:result2
    }
});



module.exports = router;
