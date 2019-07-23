// project code
const obj = [
    ['一合同段三工区', '0710ffbd-07f2-4191-ad01-4cd0d27aae88', 'ff4a3e27-69f3-4d82-9132-52faad7a4e29'],
    ['一合同段二工区', 'feaff4a4-114d-4ce6-8ffd-edaa49769777', 'ff4a3e27-69f3-4d82-9132-52faad7a4e29'],
    ['一合同段一工区', 'feaff4a4-114d-4ce6-8ffd-edaa49769941', 'ff4a3e27-69f3-4d82-9132-52faad7a4e29'],
    ['一合同段四工区', '32c2947c-cd7f-480e-9015-68b3b68d786a', 'ff4a3e27-69f3-4d82-9132-52faad7a4e29'],
    ['二合同段一工区', 'e747ee8b-9739-4bb6-a234-37ba49361d9c', '1471939b-e716-4f3d-b8ee-4bea7667f097'],
    ['二合同段二工区', 'e267c24a-08ed-4ca1-88d9-d32b7b6dad65', '1471939b-e716-4f3d-b8ee-4bea7667f097'],
    ['二合同段三工区', 'cbda68b0-6936-4ca4-88a0-1f426fe2db74', '1471939b-e716-4f3d-b8ee-4bea7667f097'],
    ['二合同段四工区', '080b861a-5dfc-401f-9a36-be9b67d06ed6', '1471939b-e716-4f3d-b8ee-4bea7667f097'],
    ['二合同段五工区', 'c03a89e1-3f43-4558-9c4d-2473e15b4f67', '1471939b-e716-4f3d-b8ee-4bea7667f097'],
    ['二合同段6-1工区', '366906c1-ef4c-4fea-8a2d-0125e7376d11', '1471939b-e716-4f3d-b8ee-4bea7667f097'],
    ['二合同段6-2工区', '17e58211-3cac-4c30-96c1-91222344f6d8', '1471939b-e716-4f3d-b8ee-4bea7667f097'],
    ['二合同段七工区', 'bebd122b-9ea4-4d79-a48c-b6cff6d1ddf7', '1471939b-e716-4f3d-b8ee-4bea7667f097'],
    ['二合同段八工区', '5bc9453a-1858-4ab4-9801-939862c36f88', '1471939b-e716-4f3d-b8ee-4bea7667f097'],
    ['1号梁场', 'ddd18457-f22e-42fa-bcee-7b267522b008', '0710ffbd-07f2-4191-ad01-4cd0d27aae88'],
    ['3号梁场', 'ddd18457-0124-ab45-bcee-7b267522b008', '366906c1-ef4c-4fea-8a2d-0125e7376d11'],
    ['1#梁厂', 'de733fbb-1f44-44d0-bcb1-bc85facc1f3d', 'feaff4a4-114d-4ce6-8ffd-edaa49769941'],
    ['2#梁厂', '551a5fe1-cdb7-4e6a-91cb-505127a5fa01', 'feaff4a4-114d-4ce6-8ffd-edaa49769941'],
    ['一标段', 'ff4a3e27-69f3-4d82-9132-52faad7a4e29', '207fa1a9-160c-4943-a89b-8fa4db0547ce'],
    ['张拉压浆机', 'ff4a3e27-69f3-0011-2233-52faad7a4e29', '551a5fe1-cdb7-4e6a-91cb-505127a5fa01'],
    ['二标段', '1471939b-e716-4f3d-b8ee-4bea7667f097', '207fa1a9-160c-4943-a89b-8fa4db0547ce']
];
const objStr = [
    {"id":"1001","name":"值1","value":"111"},
    {"id":"1001","name":"值1","value":"11111"},
    {"id":"1002","name":"值2","value":"25462"},
    {"id":"1002","name":"值2","value":"23131"},
    {"id":"1002","name":"值2","value":"2315432"},
    {"id":"1003","name":"值3","value":"333333"}
];
const table1=[
    {lineid:1,rate:6,sessions:2,ratio:3},
    {lineid:5,rate:8,sessions:1,ratio:5},
    {lineid:9,rate:4,sessions:2,ratio:2},
    {lineid:2,rate:1,sessions:3,ratio:3},
    {lineid:"99",rate:2,sessions:5,ratio:1},
    {lineid:"a",rate:4,sessions:3,ratio:9},
    {lineid:7,rate:5,sessions:7,ratio:3},
];
const table2=[
    {lineid:9,rate_2:4,sessions_2:2,ratio_2:2},
    {lineid:2,rate_2:1,sessions_2:3,ratio_2:3},
    {lineid:"99",rate_2:2,sessions_2:5,ratio_2:1},
    {lineid:"a",rate_2:4,sessions_2:3,ratio_2:9},
    {lineid:1,rate_2:6,sessions_2:2,ratio_2:3},
    {lineid:5,rate_2:8,sessions_2:1,ratio_2:5},
    {lineid:7,rate_2:5,sessions_2:7,ratio_2:3}
];
(function () {
    /*let m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
    m.forEach(function (value, key, map) {
        console.log(key + ' : ' + value + ' - ' +map);
    });
    var s = new Set(['A', 'B', 'C']);
    s.forEach(function (element, sameElement, set) {
        console.log(element + ' : ' + sameElement);
    });*/
    //f(objStr);
    //compbine();
    jointDropTree(obj);
    // func();
}());
// ES5 学习
//console.log('hi js');
// console.log(obj[0][1]);
// JSON串拼接方法
function jointDropTree(datas) {
    if (datas) {
        // 存放标段数据 / 存放工区数据 / 存放梁场数据 / 存放设备数据
        let contractData = [], areaData = [];
        // 存放TenderName,TenderId
        let mapBd = new Map();
        let mapGq = new Map();
        let mapCd = new Map();
        let mapSb = new Map();

        let bdSet = new Set();
        let gqSet = new Set();
        let cdSet = new Map();
        let sbSet = new Map();

        let map = new Map();
        for (let i = 0; i < datas.length; i++) {
            let text = datas[i][0];
            let TenderId = datas[i][1];
            let ParentId = datas[i][2];

            map.set(text, ParentId);
            if (!isEmpty(text) && text.indexOf("标段") > 0) {
                mapBd.set(text, TenderId)
            } else if (!isEmpty(text) && text.indexOf("工区") > 0) {
                mapGq.set(text, TenderId);
            } else if (!isEmpty(text) && (text.indexOf("梁") > 0) || (text.indexOf("拌合") > 0)) {
                mapCd.set(text, TenderId);
            } else {
                mapSb.set(text, TenderId);
            }
        }

        // 标段ID值对应工区标段父ID值
        // 遍历标段map
        if (mapBd) {
            mapBd.forEach(function (valueBd, keyBd, mapBd) {
                map.forEach(function (value, key, map) {
                    if (valueBd === value) {
                        //console.log(keyBd + ' : ' + key);
                        bdSet.add(keyBd);
                        gqSet.add(key);
                    }
                });
            });
        }

        // 遍历工区map
        if (mapGq) {
            let jsonGq = '';
            mapGq.forEach(function (valueGq, keyGq, mapGq) {
                map.forEach(function (value, key, map) {
                    if (value === valueGq) {
                        //console.log(key + ' <> ' + keyGq);
                        if (cdSet.has(keyGq)) {
                            jsonGq += `{text:'${key}'},`;
                            cdSet.set(keyGq, jsonGq);
                        } else {
                            jsonGq = `{text:'${key}'},`;
                            cdSet.set(keyGq, jsonGq);
                        }
                    }
                })
            });
        }

        // 遍历场地(梁场、拌合站等等)map
        if (mapCd) {
            let jsonCd = '';
            mapCd.forEach(function (valueCd, keyCd, mapCd) {
                map.forEach(function (value, key, map) {
                    if (valueCd === value) {
                        //console.log(key + ' -- ' + keyCd);
                        if (sbSet.has(keyCd)) {
                            jsonCd += `{text:'${key}'},`;
                            sbSet.set(keyCd, jsonCd);
                        } else {
                            jsonCd = `{text:'${key}'},`;
                            sbSet.set(keyCd, jsonCd);
                        }
                    }
                })
            });
        }

        // 从内往外拼接JSON字符串
        let jsonBd = '';
        if (bdSet) {
            let defaultData = "[";
            let str = '';
            let parentData = [];
            let childData = '';
            // Set转Array
            contractData = Array.from(bdSet);
            areaData = Array.from(gqSet);
            for (let i = 0; i < contractData.length; i++) {
                let a = contractData[i];
                parentData[i] = `{text: '${a}'`;
                if (areaData.length > 0) {
                    for (let j = 0; j < areaData.length; j++) {
                        if (a.substring(0, a.indexOf('标')) === areaData[j].substring(0, areaData[j].indexOf('合'))) {
                            childData += `{text: '${areaData[j]}'},`;
                        }
                    }
                    childData = childData.substring(0, childData.length - 1);
                    str += childData.length > 0 ? parentData[i] + `,nodes:[${childData}]},` : parentData[i] + ",";
                    childData = "";
                } else {
                    str += "},"
                }
            }
            jsonBd = defaultData + str.substring(0, str.length - 1) + "]";
            // return jsonBd;
        }

        // 汇总JSON字符串
        console.log(cdSet);
        console.log(sbSet);
        console.log('jsonBd = ' + jsonBd);
        // 循环替换字符串
        let resultStr = String(jsonBd);
        let strs = [];
        cdSet.forEach(function (val, key, map) {
            if (resultStr.indexOf(key) !== -1) {
                strs = resultStr.split(`\'${key}\'`);
                let vala = val.substring(0, val.length - 1);
                resultStr = strs[0] + `'${key}',nodes:[${vala}]` + strs[1];
                strs = [];
            }
        });
        sbSet.forEach(function (val, key, map) {
            if (resultStr.indexOf(key) !== -1) {
                strs = resultStr.split(`\'${key}\'`);
                let vala = val.substring(0, val.length - 1);
                resultStr = strs[0] + `'${key}',nodes:[${vala}]` + strs[1];
                strs = [];
            }
        });
        console.log('result json : ' + resultStr);
    } else {
        return "[{text:'数据为空'}]";
    }
}

// 自定义Maps集合
function Maps() {
    this.elements = [];

    // 获取Map集合元素个数
    this.size = function () {
        return this.elements.length;
    };

    //判断MAP是否为空
    this.isEmpty = function () {
        return (this.elements.length < 1);
    };

    //删除MAP所有元素
    this.clear = function () {
        this.elements = [];
    };

    //向MAP中增加元素（key, value)
    this.put = function (_key, _value) {
        this.elements.push({
            key: _key,
            value: _value
        });
    };

    //删除指定KEY的元素，成功返回True，失败返回False
    this.remove = function (_key) {
        var bln = false;
        try {
            for (i = 0; i < this.elements.length; i++) {
                if (this.elements[i].key === _key) {
                    this.elements.splice(i, 1);
                    return true;
                }
            }
        } catch (e) {
            bln = false;
        }
        return bln;
    }

    //获取指定KEY的元素值VALUE，失败返回NULL
    this.get = function (_key) {
        try {
            for (i = 0; i < this.elements.length; i++) {
                if (this.elements[i].key === _key) {
                    return this.elements[i].value;
                }
            }
        } catch (e) {
            return null;
        }
    };

    //获取指定索引的元素（使用element.key，element.value获取KEY和VALUE），失败返回NULL
    this.element = function (_index) {
        if (_index < 0 || _index >= this.elements.length) {
            return null;
        }
        return this.elements[_index];
    };

    //判断MAP中是否含有指定KEY的元素
    this.containsKey = function (_key) {
        var bln = false;
        try {
            for (i = 0; i < this.elements.length; i++) {
                if (this.elements[i].key === _key) {
                    bln = true;
                }
            }
        } catch (e) {
            bln = false;
        }
        return bln;
    };

    //判断MAP中是否含有指定VALUE的元素
    this.containsValue = function (_value) {
        var bln = false;
        try {
            for (i = 0; i < this.elements.length; i++) {
                if (this.elements[i].value === _value) {
                    bln = true;
                }
            }
        } catch (e) {
            bln = false;
        }
        return bln;
    };

    //获取MAP中所有VALUE的数组（ARRAY）
    this.values = function () {
        var arr = [];
        for (i = 0; i < this.elements.length; i++) {
            arr.push(this.elements[i].value);
        }
        return arr;
    };

    //获取MAP中所有KEY的数组（ARRAY）
    this.keys = function () {
        var arr = [];
        for (i = 0; i < this.elements.length; i++) {
            arr.push(this.elements[i].key);
        }
        return arr;
    }
}
// 判断是否为空
function isEmpty(value) {
    if (value == null || value === "" || value === "undefined" || value === undefined || value === "null") {
        return true;
    } else {
        value = value.replace(/\s/g, "");
        if (value === "") {
            return true;
        }
        return false;
    }
}

function f(arr) {
    let map = {}, dest = [];
    for(let i = 0; i < arr.length; i++){
        let ai = arr[i];
        if (!map[ai.id]) {
            dest.push({
                id: ai.id,
                name: ai.name,
                data: [ai]
            });
            map[ai.id] = ai;
        } else {
            for (let j = 0; j < dest.length; j++) {
                let dj = dest[j];
                if (dj.id === ai.id) {
                    dj.data.push(ai);
                    break;
                }
            }
        }
    }
    console.log(dest);
}

// 根据lineid把table2合并到table1
function compbine() {
    table2.forEach(function(o,d){
        for(let k in o){
            table1.forEach(function(t){
                for(let key in t){
                    if(t.lineid == o.lineid){
                        t[k] = o[k];
                    }

                }
            })
        }
    });
    console.log(table1);
}
// 不重复保存数据
Array.prototype.pushNoRepeat = function () {
    for (let i = 0; i < arguments.length; i++) {
        let ele = arguments[i];
        if (this.indexOf(ele) === -1) {
            this.push(ele);
        }
    }
};

function func() {
    let insertStr = (soure,start, newStr) => {
        return soure.slice(0, start) + newStr + soure.slice(start)
    };
    let testStr = "蚂蚁部落";
    console.log(insertStr(testStr,1,"奋斗"));
}
