import axiosts from './axiosts';
import _axios from 'axios';
import axios from 'axios';
let Test = process.env.NODE_ENV !== "production" ? false : true;
const URL = "http://192.168.2.24:810/api";
// 格式化
function queryParam(params: object[]) {
    let str: string = "?";
    params.forEach((e: any) => {
        for (let i in e) {
            str += i + '=' + e[i] + '&';
        }
    })
    return str.slice(0, str.length - 1);
}
// 数据处理加0
let handlerTopDataToSomeZero = (num: any) => {
    if (!num) return num;
    let thisNum = ("" + num).split("");
    let zeroLength = 6 - thisNum.length;
    let arr: any = [];
    arr.length = zeroLength;
    arr.fill(0);
    let resArray = arr.concat(thisNum);
    return resArray;
}
// 数据单位转换
let handlerNumberUnit = (num: any) => {
    num = +num;
    if (num > 1000 && num < 10000) {
        return (num / 1000).toFixed(2) + "K"
    }
    if (num > 10000 && num < 100000) {
        return (num / 10000).toFixed(1) + "W"
    }
    if (num > 100000) {
        return (num / 100000).toFixed(0) + "W"
    }
    return num;
}



/** 
 *  Data Big Screen Special Use API Interface
*/

// 头部数据
export let getTopData = () => {
    return Test ? new Promise((resolve, reject) => {
        resolve({
            data: {
                code: 1,
                data: {
                    references: handlerNumberUnit((Math.random() * 543).toFixed(0)),
                    doctor: handlerNumberUnit((Math.random() * 123).toFixed(0)),
                    order: handlerNumberUnit((Math.random() * 1233).toFixed(0)),
                    certificationPendingApproval: handlerNumberUnit((Math.random() * 1123569).toFixed(0)),
                    withdrawalToBeApproved: handlerNumberUnit((Math.random() * 1000).toFixed(0)),
                }
            }
        })
    }) : axios.post(URL + "/screen/Datecount/countFiveData")
}
// 今日新增运营统计
export let getNewOperationStatisticsToday = () => {
    return Test ? new Promise((resolve) => {
        resolve({
            data: {
                code: 1,
                data: {
                    count_arr: handlerTopDataToSomeZero(((Math.random() * 121233).toFixed(0))),
                    references_count: handlerNumberUnit((Math.random() * 123).toFixed(0)),
                    doctor_count: handlerNumberUnit((Math.random() * 123).toFixed(0)),
                    order_count: handlerNumberUnit((Math.random() * 123).toFixed(0)),
                }
            }
        })
    }) : axios.post(URL + '/screen/Datecount/countNewlyAdded')
}
// 本月新增运营统计
// export let getNewOperationStatisticsOfThisMonth = () => {
//     return Test ? new Promise((resolve) => {
//         resolve({
//             data: {
//                 code: 1,
//                 data: {
//                     count_arr: handlerTopDataToSomeZero(((Math.random() * 121233).toFixed(0))),
//                     references_count: handlerNumberUnit((Math.random() * 123).toFixed(0)),
//                     doctor_count: handlerNumberUnit((Math.random() * 123).toFixed(0)),
//                     order_count: handlerNumberUnit((Math.random() * 123).toFixed(0))
//                 }
//             }
//         })
//     }) : () => {}
// }
/** 
 * 近七日盈利成本对比
 */
export let getComparisonOfProfitAndCostInRecentSevenDays = () => {
    return Test ? new Promise((resolve) => {
        resolve({
            data: {
                code: 1,
                data: {
                    date: [
                        "5月25日",
                        "5月26日",
                        "5月27日",
                        "5月28日",
                        "5月29日",
                        "5月30日",
                        "5月31日"
                    ],
                    data1: [handlerNumberUnit((Math.random() * 123).toFixed(0)), handlerNumberUnit((Math.random() * 123).toFixed(0)), handlerNumberUnit((Math.random() * 123).toFixed(0)), handlerNumberUnit((Math.random() * 123).toFixed(0)), handlerNumberUnit((Math.random() * 123).toFixed(0)), handlerNumberUnit((Math.random() * 123).toFixed(0)), handlerNumberUnit((Math.random() * 123).toFixed(0))],
                    data2: [handlerNumberUnit((Math.random() * 123).toFixed(0)), handlerNumberUnit((Math.random() * 123).toFixed(0)), handlerNumberUnit((Math.random() * 123).toFixed(0)), handlerNumberUnit((Math.random() * 123).toFixed(0)), handlerNumberUnit((Math.random() * 123).toFixed(0)), handlerNumberUnit((Math.random() * 123).toFixed(0)), handlerNumberUnit((Math.random() * 123).toFixed(0))],
                }
            }
        })
    }) : axios.post(URL + "/screen/Datecount/countWeekProfit")
}
/**
 * 
 *  近七日新增订单
 */
export let getNewOrdersInRecentSevenDays = () => {
    return Test ? new Promise((resolve) => {
        resolve({
            data: {
                code: 1,
                data: {
                    date: [
                        "5月25日",
                        "5月26日",
                        "5月27日",
                        "5月28日",
                        "5月29日",
                        "5月30日",
                        "5月31日",
                    ],
                    data1: [handlerNumberUnit((Math.random() * 123).toFixed(0)), handlerNumberUnit((Math.random() * 123).toFixed(0)), handlerNumberUnit((Math.random() * 123).toFixed(0)), handlerNumberUnit((Math.random() * 123).toFixed(0)), handlerNumberUnit((Math.random() * 123).toFixed(0)), handlerNumberUnit((Math.random() * 123).toFixed(0)), handlerNumberUnit((Math.random() * 123).toFixed(0))],
                }
            }
        })
    }) : axios.post(URL + "/screen/Datecount/countWeekOrder")
}

/**
 *  订单业务历史统计 
 */
export let getOrderBusinessHistoryStatistics = () => {
    return Test ? new Promise((resolve) => {
        resolve({
            data: {
                code: 1,
                data: [{
                    id: 1,
                    references: "尼玛的",
                    doctor: "你好",
                    company: "河北我草你妈有限公司",
                    money: handlerNumberUnit((Math.random() * 123).toFixed(0)),
                    date: "2021年5月24日11:36:25",
                },
                {
                    id: 2,
                    references: "尼玛的",
                    doctor: "你好",
                    company: "河北我草你妈有限公司",
                    money: handlerNumberUnit((Math.random() * 123).toFixed(0)),
                    date: "2021年5月24日11:36:25",
                },
                {
                    id: 3,
                    references: "尼玛的",
                    doctor: "你好",
                    company: "河北我草你妈有限公司",
                    money: handlerNumberUnit((Math.random() * 123).toFixed(0)),
                    date: "2021年5月24日11:36:25",
                },
                {
                    id: 4,
                    references: "尼玛的",
                    doctor: "你好",
                    company: "河北我草你妈有限公司",
                    money: handlerNumberUnit((Math.random() * 123).toFixed(0)),
                    date: "2021年5月24日11:36:25",
                },
                {
                    id: 5,
                    references: "尼玛的",
                    doctor: "你好",
                    company: "河北我草你妈有限公司",
                    money: handlerNumberUnit((Math.random() * 123).toFixed(0)),
                    date: "2021年5月24日11:36:25",
                },
                {
                    id: 6,
                    references: "尼玛的",
                    doctor: "你好",
                    company: "河北我草你妈有限公司",
                    money: handlerNumberUnit((Math.random() * 123).toFixed(0)),
                    date: "2021年5月24日11:36:25",
                },
                {
                    id: 7,
                    references: "尼玛的",
                    doctor: "你好",
                    company: "河北我草你妈有限公司",
                    money: handlerNumberUnit((Math.random() * 123).toFixed(0)),
                    date: "2021年5月24日11:36:25",
                },
                {
                    id: 8,
                    references: "尼玛的",
                    doctor: "你好",
                    company: "河北我草你妈有限公司",
                    money: handlerNumberUnit((Math.random() * 123).toFixed(0)),
                    date: "2021年5月24日11:36:25",
                },
                ]
            }
        })
    }) : axios.post(URL + '/screen/Datecount/orderCount')
}