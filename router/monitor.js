/**
 * @file
 * @Author: daijiulong
 * @Date:   2019/4/19
 */
const router = require('koa-router')();

const chartData = require('../chartdata');
const chartData2 = require('../chartdata2');
const chartData3 = require('../chartdata3');


var data = {
    key: 'overall',
    value: '网盟整体',
    sub: [
        {
            key: 'test-1',
            value: 'test-1',
            sub: [
                {
                    key: 'test-1-1',
                    value: 'test-1-1',
                },
                {
                    key: 'test-1-2',
                    value: 'test-1-2',
                    sub: [
                        {
                            key: 'test-1-1-1',
                            value: 'test-1-1-1',
                            sub: [
                                {
                                    key: 'test-1-1-1-1',
                                    value: 'test-1-1-1-1',
                                },
                                {
                                    key: 'test-1-1-1-2',
                                    value: 'test-1-1-1-2',
                                }
                            ]
                        },
                        {
                            key: 'test-1-1-2',
                            value: 'test-1-1-2',

                        },
                        {
                            key: 'test-1-1-3',
                            value: 'test-1-1-3',

                        },
                        {
                            key: 'test-1-1-4',
                            value: 'test-1-1-4',

                        },
                        {
                            key: 'test-1-1-5',
                            value: 'test-1-1-5',

                        }
                    ]
                },
                {
                    key: 'test-1-3',
                    value: 'test-1-3',
                },
                {
                    key: 'test-1-4',
                    value: 'test-1-4',
                },
            ]
        },
        {
            key: 'test-2',
            value: 'test-2',
            sub: [{
                key: 'test-2-1',
                value: 'test-2-1',
                sub:[
                    {
                        key: 'test-2-1-1',
                        value: 'test-2-1-1',
                    } ,
                    {
                        key: 'test-2-1-1',
                        value: 'test-2-1-2',
                    }
                ]
            },
                {
                    key: 'test-2-2',
                    value: 'test-2-2',
                }
            ]
        },
        {
            key: 'test-3',
            value: 'test-3',
        },
        {
            key: 'test-4',
            value: 'test-4',
        }
    ]};
var data2 =[{"keyVal":"overall","name":"网盟整体","autohide":true,"expand":true,"sub":[{"keyVal":"lu","name":"LU DSP","autohide":true,"expand":false,"sub":[{"keyVal":"lu_sousuo","name":"搜索","autohide":true,"expand":false,"sub":[{"keyVal":"lu_sousuo_unioncpro","name":"大搜导流","autohide":true,"expand":false},{"keyVal":"lu_sousuo_tuijian","name":"搜索推荐","autohide":true,"expand":false}]},{"keyVal":"lu_no_sousuo","name":"非搜索","autohide":true,"expand":false,"sub":[{"keyVal":"lu_no_sousuo_huichuan","name":"Feed中间页","autohide":true,"expand":false,"sub":[{"keyVal":"lu_no_sousuo_huichuan_feed","name":"原生","autohide":true,"expand":false},{"keyVal":"lu_no_sousuo_huichuan_fengchao","name":"凤巢","autohide":true,"expand":false}]},{"keyVal":"lu_no_sousuo_chuilei","name":"垂类中间页","autohide":true,"expand":false},{"keyVal":"lu_no_sousuo_onestep","name":"一跳","autohide":true,"expand":false}]}]},{"keyVal":"other_dsp","name":"其他DSP","autohide":true,"expand":false,"sub":[{"keyVal":"other_dsp_content_union","name":"内容联盟","autohide":true,"expand":false},{"keyVal":"other_dsp_foreign_union","name":"外部联盟","autohide":true,"expand":false},{"keyVal":"other_dsp_union_kaiping","name":"联盟开屏","autohide":true,"expand":false}]},{"keyVal":"union_other","name":"网盟其他","autohide":true,"expand":false}]}]

var treeData = [
    {key:'overall',gain:2015001014644,gainTb:25.8,gainHb:-9.980,gaap:20154644,gaapTb:0.258,gaapHb:0.2556,spv:3232232,spvTb:0.242,spvHb:0.231,cpm:323121,cpmTb:0.232,cpmHb:0.212},
    {key:'lu',gain:121342,gainTb:0.258,gainHb:0.2556,gaap:20154644,gaapTb:0.258,gaapHb:0.2556,spv:3232232,spvTb:0.242,spvHb:0.231,cpm:323121,cpmTb:0.232,cpmHb:0.212},
    {key:'union_other',gain:5465123,gainTb:0.258,gainHb:0.2556,gaap:20154644,gaapTb:0.258,gaapHb:0.2556,spv:3232232,spvTb:0.242,spvHb:0.231,cpm:323121,cpmTb:0.232,cpmHb:0.212},
    {key:'other_dsp',gain:15412,gainTb:0.258,gainHb:0.2556,gaap:20154644,gaapTb:0.258,gaapHb:0.2556,spv:3232232,spvTb:0.242,spvHb:0.231,cpm:323121,cpmTb:0.232,cpmHb:0.212},
    {key:'test-4',gain:444444,gainTb:0.258,gainHb:0.2556,gaap:20154644,gaapTb:0.258,gaapHb:0.2556,spv:3232232,spvTb:0.242,spvHb:0.231,cpm:323121,cpmTb:0.232,cpmHb:0.212},
    {key:'test-1-1',gain:444444,gainTb:0.258,gainHb:0.2556,gaap:20154644,gaapTb:0.258,gaapHb:0.2556,spv:3232232,spvTb:0.242,spvHb:0.231,cpm:323121,cpmTb:0.232,cpmHb:0.212},
    {key:'test-1-2',gain:444444,gainTb:0.258,gainHb:0.2556,gaap:20154644,gaapTb:0.258,gaapHb:0.2556,spv:3232232,spvTb:0.242,spvHb:0.231,cpm:323121,cpmTb:0.232,cpmHb:0.212},
    {key:'test-1-3',gain:444444,gainTb:0.258,gainHb:0.2556,gaap:20154644,gaapTb:0.258,gaapHb:0.2556,spv:3232232,spvTb:0.242,spvHb:0.231,cpm:323121,cpmTb:0.232,cpmHb:0.212},
    {key:'test-1-4',gain:444444,gainTb:0.258,gainHb:0.2556,gaap:20154644,gaapTb:0.258,gaapHb:0.2556,spv:3232232,spvTb:0.242,spvHb:0.231,cpm:323121,cpmTb:0.232,cpmHb:0.212},
    {key:'test-2-1',gain:444444,gainTb:0.258,gainHb:0.2556,gaap:20154644,gaapTb:0.258,gaapHb:0.2556,spv:3232232,spvTb:0.242,spvHb:0.231,cpm:323121,cpmTb:0.232,cpmHb:0.212},
    {key:'test-2-2',gain:444444,gainTb:0.258,gainHb:0.2556,gaap:20154644,gaapTb:0.258,gaapHb:0.2556,spv:3232232,spvTb:0.242,spvHb:0.231,cpm:323121,cpmTb:0.232,cpmHb:0.212},
];



router.get('/api/monitor/maxdate', async(ctx,next) =>{
    ctx.body = {
        maxDate: "2019-05-01"
    }
});


router.get('/api/monitor', async(ctx,next) =>{
    ctx.body = {
        data:[
           data2
        ]
    }
});


router.get('/api/monitor/tree', async(ctx,next) =>{
    ctx.body = {
           data: treeData
    }
});



router.get('/api/monitor/chart', async(ctx,next) =>{
    var reqDate = ctx.query.datestart;
    var datetype = ctx.query.datetype;
    if (datetype === 'day'){
        ctx.body = {
            data: chartData
        }
        // if (reqDate == '2019-04-01'){
        //     ctx.body = {
        //         data: chartData
        //     }
        // } else if (reqDate == '2019-03-01') {
        //     ctx.body = {
        //         data: chartData3
        //     }
        // }
    }else{
        ctx.body = {
            data: [
                {
                    "date" : "2019-02",
                    "name" : "overall",
                    "gaap" : "34394367.0000",
                    "gain" : "1.0748",
                    "spv" : "21564997.3946",
                    "cpm" : "19802195.6290",
                    "indicesTbValue" : "25579174.6303",
                    "indicesZb" : "1.0000",
                    "indices_QTJZTb" : "-0.2336",
                    "indicesHb" : "-0.1231",
                    "indicesTb" : "-0.3211",
                    "indices" : "17365236.9024"
                },
                {
                    "date" : "2019-03",
                    "name" : "overall",
                    "gaap" : "34394367.0000",
                    "gain" : "23.0748",
                    "cpm" : "21564997.3946",
                    "spv" : "19802195.6290",
                    "indicesTbValue" : "25579174.6303",
                    "indicesZb" : "1.0000",
                    "indices_QTJZTb" : "-0.2336",
                    "indicesHb" : "-0.1231",
                    "indicesTb" : "-0.3211",
                    "indices" : "17365236.9024"
                },
                {
                    "date" : "2019-04",
                    "name" : "overall",
                    "gaap" : "34394367.0000",
                    "gain" : "323.0748",
                    "cpm" : "21564997.3946",
                    "spv" : "19802195.6290",
                    "indicesTbValue" : "25579174.6303",
                    "indicesZb" : "1.0000",
                    "indices_QTJZTb" : "-0.2336",
                    "indicesHb" : "-0.1231",
                    "indicesTb" : "-0.3211",
                    "indices" : "17365236.9024"
                },
                {
                    "date" : "2019-05",
                    "name" : "overall",
                    "spv" : "34394367.0000",
                    "gain" : "154.0748",
                    "cpm" : "21564997.3946",
                    "gaap" : "19802195.6290",
                    "indicesTbValue" : "25579174.6303",
                    "indicesZb" : "1.0000",
                    "indices_QTJZTb" : "-0.2336",
                    "indicesHb" : "-0.1231",
                    "indicesTb" : "-0.3211",
                    "indices" : "17365236.9024"
                }
            ]
        }
    }

    console.log(reqDate);
});


router.get('/api/monitor/chart2', async(ctx,next) =>{
    ctx.body = {
        data: chartData2
    }
});


module.exports = router;
