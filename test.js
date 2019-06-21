/**
 * @file
 * @Author: daijiulong
 * @Date:   2019/4/23
 */
var data = {
    key: 'overall',
    value: '网盟整体',
    sub: [
    {
        key: 'test-1',
        value: 'LU DSP',
        sub: [
            {
                key: 'test-1-1',
                value: 'test1',
            },
            {
                key: 'test-1-2',
                value: 'test2',
                sub: [
                    {
                        key: 'test-1-1-1',
                        value: '其他 DSP',
                        sub: [
                            {
                                key: 'test-1-1-1-1',
                                value: '其他 DSP',
                            },
                            {
                                key: 'test-1-1-1-2',
                                value: '其他 DSP',
                            }
                        ]
                    },
                    {
                        key: 'test-1-1-2',
                        value: '其他',

                    }
                ]
            }
        ]
    },
    {
        key: 'test-2',
        value: '其他 DSP',
        sub: [{
            key: 'test-2-1',
            value: '其他',
        },
            {
                key: 'test-2-2',
                value: '运营单位',
            }
        ]
    },
    {
        key: 'test-3',
        value: '其他',
    },
    {
        key: 'test-4',
        value: '运营单位',
    }
]};


function findSub(data,key){
    if (data['key'] === key){
        return data['sub'];
    }
    var tmp = data.sub.map(function (item) {
        return item['key'] == key
    });
    return tmp
}
var result = findSub(data,'opunit')
console.log(result);
