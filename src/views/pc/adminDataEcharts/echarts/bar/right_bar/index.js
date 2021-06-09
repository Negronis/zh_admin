var emphasisStyle = {
    itemStyle: {
        borderWidth: 1,
        shadowBlur: 5,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0,0,0,0.5)'
    }
};

let option = {
    color: ['#ffdb5c', '#128665'],
    backgroundColor: 'transparent',
    legend: {
        show:false,
        data: ['男', '女'],
        right: 15,
        top: 15,
        textStyle: {
            color: "#fff"
        }
    },
    xAxis: [{
        data: [],
        axisLine: {
            show: true,
            onZero: false,
            lineStyle: {
                color: "#fff"
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            interval: 0,
            color: "#00fcf9",
            fontSize: 16,
            margin: 30
            // rotate: 30
        },
        splitLine: {
            show: false
        },
        splitArea: {
            show: false
        }
    }, {
        type: "value",
        axisLine: {
            show: true,
            onZero: true,
            lineStyle: {
                color: "#fff",
                width: 1
            }
        },
    }],
    yAxis: {
        inverse: false,
        axisLine: {
            show: true,
            lineStyle: {
                color: "#128665"
            }
        },
        splitLine: {
            show: true,
            interval: 1,
            lineStyle: {
                opacity: .5,
                color: '#128665'
            }
        },
        splitArea: {
            show: false
        },
        axisLabel: {
            color: "#00fcf9",
        },
        axisTick: {
            show: false
        },
    },
    grid: {
        left: 30,
        right: 30,
        bottm: 0,
        top: 100,
    },
    series: [{
            name: '男',
            type: 'bar',
            // stack: 'two',
            emphasis: emphasisStyle,
            itemStyle: {
                // barBorderRadius:[0,0,10,10],
            },
            barWidth: 25,
            data: []
        },
        {
            name: '女',
            type: 'bar',
            // stack: 'two',
            barWidth: 25,
            itemStyle: {
                // barBorderRadius: [10, 10, 0, 0],
            },
            emphasis: emphasisStyle,
            data: []
        }
    ]
};
export default option;