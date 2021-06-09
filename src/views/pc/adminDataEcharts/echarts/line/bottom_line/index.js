let xData = [];
let Data = [];
for (let a = 1; a <= 7; a++) {
    xData.push(a + "月" + a + "日")
    Data.push(Math.random() * a * 100)
}
let option = {
    color: [
        '#14beff'
    ],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985',
            }
        }
    },
    // legend: {
    //     data: ['邮件营销']
    // },
    grid: {
        top: 80,
        left: 20,
        right: 30,
        bottom: 50,
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: xData,
            axisLine: {
                // show:false,
                lineStyle: {
                    color: "#fff"
                },
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
                lineStyle: {
                    opacity: .5,
                    color: 'rgba(255,255,255,.2)'
                }
            },
            axisLabel: {
                show: true,
                interval: 0,
                color:"#00fcf9",
                fontSize:13,
                margin:30 
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: "#00fcf9"
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    opacity: .5,
                    color: '#00fcf9'
                }
            }
        }
    ],
    series: [
        {
            name: '随访曲线图',
            type: 'line',
            stack: '总量',
            smooth: .3,
            areaStyle: {
                opacity: .1
            },
            data: Data
        }
    ]
};
export default option;