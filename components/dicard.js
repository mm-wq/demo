// 笛卡尔积
let shopType= []
let newList= []
let newData = []
let tableData7 = []
function descartes(array) {
    if (array.length < 2){
        let arr = []
        for(let i = 0; i < array[0].length; i++){
            let a = []
            a.push(array[0][i])
            arr.push(a)
        }
        return arr || [];
    }
    return [].reduce.call(array, function (col, set) {
        var res = [];
        col.forEach(function (c) {
            set.forEach(function (s) {
                var t = [].concat(Array.isArray(c) ? c : [c]);
                t.push(s);
                res.push(t);
            })
        });
        return res;
    });
}
function processing(data) {
    shopType = data
    newData = [];
    for (let i = 0; i < shopType.length; i++) {
        var newlist = [];
        for (let index = 0; index < shopType[i].list.length; index++) {
            newlist.push(shopType[i].list[index].id);
        }
        newData.push(newlist);
    }
    return getList();
}
//转换数据
function getList() {
    tableData7 = [];
    newList = descartes(newData);
    for (let index = 0; index < newList.length; index++) {
        tableData7.push({
            color: newList[index][0],
            cailiao: newList[index][1],
            chima: newList[index][2],
            kucun: newList[index][3],
            moany: newList[index][4],
            id : index + 1
        });
    }
    return tableData7
}

export {processing}

// let data = [{
//     name: "颜色",
//     typeNames: [{
//             type: "红色",
//             img: ""
//         },
//         {
//             type: "白色",
//             img: ""
//         }
//     ]
// },
// {
//     name: "材料",
//     typeNames: [{
//             type: "棉花",
//             img: ""
//         },
//         {
//             type: "纱布",
//             img: ""
//         }
//     ]
// }
// ]
// // export {processing}
// processing(data)