function f() {
    if (datas.length > 0) {
        // 存放标段数据
        let contractData = new Array();
        // 存放工区数据
        let areaData = new Array();
        // 存放梁场数据
        let siteData = new Array();
        // 存放设备数据
        let equipData = new Array();
        // 存放TenderName,TenderId
        var mapBd = new Maps();
        var mapGq = new Maps();
        var mapCd = new Maps();
        var mapSb = new Maps();
        let mapSet = new Set();
        // 将后台返回数据放到相应的Maps中
        for (let i = 0; i < datas.length; i++) {
            let text = datas[i].text;
            let tenderId = datas[i].TenderId;
            let parentId = datas[i].ParentId;
            if (!isEmpty(text) && text.indexOf("标段") > 0) {
                contractData.push(tenderId);
                contractData.push(parentId);
                mapBd.put(text, contractData);
            } else if (!isEmpty(text) && text.indexOf("工区") > 0) {
                areaData.push(tenderId);
                areaData.push(parentId);
                mapGq.put(parentId, areaData);
            } else if (!isEmpty(text) && (text.indexOf("梁") > 0) || (text.indexOf("拌合") > 0)) {
                siteData.push(tenderId);
                siteData.push(parentId);
                mapCd.put(text, siteData);
            } else {
                equipData.push(tenderId);
                equipData.push(parentId);
                mapSb.put(text, equipData);
            }
        }
        // 便利Maps拼接JSON字符串
        if (mapBd.size > 0) {
            mapBd.forEach({
                function(value, key, map) {
                    console.log(value);
                }
            });
        }

        if (contractData.length != 0) {
            var defaultData = "[";
            var str = "";
            var parentData = new Array();
            var childData = "";
            for (var i = 0; i < contractData.length; i++) {
                let a = contractData[i];
                parentData[i] = `{text: '${a}'`;
                if (areaData.length != 0) {
                    for (var j = 0; j < areaData.length; j++) {
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
            return defaultData + str.substring(0, str.length - 1) + "]";
        }
    } else {
        return "[{text:'该用户暂未挂载合同段'}]";
    }
}
