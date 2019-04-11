/**
 * @file
 * @Author: daijiulong
 * @Date:   2019/4/3
 */
const router = require('koa-router')();
let Mock = require('mockjs')
router.get('/api/incomeAnalysis', async (ctx, next) => {
    console.log(ctx.request.query);
    let req_date =  ctx.request.query;
    if (req_date){
        ctx.body = Mock.mock({
            value: [
                {
                    date: Mock.mock('@datetime("yyyy-MM-dd")'),
                    dim: "overall",
                    dimadlib: "baitong",
                    indicesQTD: "10002",
                    dimpage: "lu_baitong",
                    dimtratp: "app",
                    target: "88242.6200",
                    indicesHb: "-0.1971",
                    indicesHbValue: "109910.5500",
                    indicesTb: "-0.1827",
                    indicesTbValue: "107965.8800",
                    indicesZb: "0.0022",
                    indices_JZRHB: "-0.0249",
                    indices_JZZTB: "0.0005",
                    indices_QTJZ: "110208.0957"
                },
                {
                    date: Mock.mock('@datetime("yyyy-MM-dd")'),
                    dim: "lu",
                    dimadlib: "baitong",
                    indicesQTD: "10000",
                    dimpage: "lu_baitong",
                    dimtratp: "app",
                    target: "88242.6200",
                    indices: "-0.1971",
                    indicesHbValue: "109910.5500",
                    indicesTb: "-0.1827",
                    indicesTbValue: "107965.8800",
                    indicesZb: "0.0022",
                    indices_JZRHB: "-0.0249",
                    indices_JZZTB: "0.0005",
                    indices_QTJZ: "110208.0957"
                },
                {
                    date: Mock.mock('@datetime("yyyy-MM-dd")'),
                    dim: "lu_onestep",
                    dimadlib: "baitong",
                    indicesQTD: "10000",
                    dimpage: "lu_baitong",
                    dimtratp: "app",
                    target: "88242.6200",
                    indices: "-0.1971",
                    indicesHbValue: "109910.5500",
                    indicesTb: "-0.1827",
                    indicesTbValue: "107965.8800",
                    indicesZb: "0.0022",
                    indices_JZRHB: "-0.0249",
                    indices_JZZTB: "0.0005",
                    indices_QTJZ: "110208.0957"
                },
                {
                    date: Mock.mock('@datetime("yyyy-MM-dd")'),
                    dim: "lu_zhongjianye_huichuan_feed",
                    dimadlib: "baitong",
                    indicesQTD: "10000",
                    dimpage: "lu_baitong",
                    dimtratp: "app",
                    target: "88242.6200",
                    indices: "-0.1971",
                    indicesHbValue: "109910.5500",
                    indicesTb: "-0.1827",
                    indicesTbValue: "107965.8800",
                    indicesZb: "0.0022",
                    indices_JZRHB: "-0.0249",
                    indices_JZZTB: "0.0005",
                    indices_QTJZ: "110208.0957"
                },
                {
                    date: Mock.mock('@datetime("yyyy-MM-dd")'),
                    dim: "other_dsp",
                    dimadlib: "baitong",
                    indicesQTD: "10000",
                    dimpage: "lu_baitong",
                    dimtratp: "app",
                    target: "88242.6200",
                    indices: "-0.1971",
                    indicesHbValue: "109910.5500",
                    indicesTb: "-0.1827",
                    indicesTbValue: "107965.8800",
                    indicesZb: "0.0022",
                    indices_JZRHB: "-0.0249",
                    indices_JZZTB: "0.0005",
                    indices_QTJZ: "110208.0957"
                },
                {
                    date: Mock.mock('@datetime("yyyy-MM-dd")'),
                    dim: "other_dsp_content_union",
                    dimadlib: "baitong",
                    indicesQTD: "10000",
                    dimpage: "lu_baitong",
                    dimtratp: "app",
                    target: "88242.6200",
                    indices: "-0.1971",
                    indicesHbValue: "109910.5500",
                    indicesTb: "-0.1827",
                    indicesTbValue: "107965.8800",
                    indicesZb: "0.0022",
                    indices_JZRHB: "-0.0249",
                    indices_JZZTB: "0.0005",
                    indices_QTJZ: "110208.0957"
                },
                {
                    date: Mock.mock('@datetime("yyyy-MM-dd")'),
                    dim: "other_dsp_content_union",
                    dimadlib: "baitong",
                    indicesQTD: "10000",
                    dimpage: "lu_baitong",
                    dimtratp: "app",
                    target: "88242.6200",
                    indices: "-0.1971",
                    indicesHbValue: "109910.5500",
                    indicesTb: "-0.1827",
                    indicesTbValue: "107965.8800",
                    indicesZb: "0.0022",
                    indices_JZRHB: "-0.0249",
                    indices_JZZTB: "0.0005",
                    indices_QTJZ: "110208.0957"
                },
                {
                    date: Mock.mock('@datetime("yyyy-MM-dd")'),
                    dim: "other_dsp_union_kaiping",
                    dimadlib: "baitong",
                    indicesQTD: "10000",
                    dimpage: "lu_baitong",
                    dimtratp: "app",
                    target: "88242.6200",
                    indices: "-0.1971",
                    indicesHbValue: "109910.5500",
                    indicesTb: "-0.1827",
                    indicesTbValue: "107965.8800",
                    indicesZb: "0.0022",
                    indices_JZRHB: "-0.0249",
                    indices_JZZTB: "0.0005",
                    indices_QTJZ: "110208.0957"
                },
                {
                    date: Mock.mock('@datetime("yyyy-MM-dd")'),
                    dim: "other_dsp_foreign_union",
                    dimadlib: "baitong",
                    indicesQTD: "10000",
                    dimpage: "lu_baitong",
                    dimtratp: "app",
                    target: "88242.6200",
                    indices: "-0.1971",
                    indicesHbValue: "109910.5500",
                    indicesTb: "-0.1827",
                    indicesTbValue: "107965.8800",
                    indicesZb: "0.0022",
                    indices_JZRHB: "-0.0249",
                    indices_JZZTB: "0.0005",
                    indices_QTJZ: "110208.0957"
                },
                {
                    date: Mock.mock('@datetime("yyyy-MM-dd")'),
                    dim: "li_sousuo",
                    dimadlib: "baitong",
                    indicesQTD: "10000",
                    dimpage: "lu_baitong",
                    dimtratp: "app",
                    target: "88242.6200",
                    indices: "-0.1971",
                    indicesHbValue: "109910.5500",
                    indicesTb: "-0.1827",
                    indicesTbValue: "107965.8800",
                    indicesZb: "0.0022",
                    indices_JZRHB: "-0.0249",
                    indices_JZZTB: "0.0005",
                    indices_QTJZ: "110208.0957"
                },
                {
                    date: Mock.mock('@datetime("yyyy-MM-dd")'),
                    dim: "union_other",
                    dimadlib: "baitong",
                    indicesQTD: "10000",
                    dimpage: "lu_baitong",
                    dimtratp: "app",
                    target: "88242.6200",
                    indices: "-0.1971",
                    indicesHbValue: "109910.5500",
                    indicesTb: "-0.1827",
                    indicesTbValue: "107965.8800",
                    indicesZb: "0.0022",
                    indices_JZRHB: "-0.0249",
                    indices_JZZTB: "0.0005",
                    indices_QTJZ: "110208.0957"
                }
            ]
        })
    } else {

    }

});
module.exports = router;
