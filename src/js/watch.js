var wathchpoint = 30
var date = new Date();
var cpuChart = echarts.init(document.getElementById('cpu'));
initchart(cpuChart,'cpu')
var cpuT = []
var cpuR = []
ipc.on('addcpudata',function(event,data){
    if(cpuT.length > wathchpoint){
        cpuT.shift()
        cpuR.shift()
    } 
    cpuT.push([date.getHours(),date.getMinutes(),date.getSeconds()].join(':'))
    cpuR.push(data)
    cpuChart.setOption({
        xAxis:{
        data:cpuT
        },
        series:[{
        name:'usage',
        data:cpuR
        }]
    })
})
var memChart = echarts.init(document.getElementById('mem'));
initchart(memChart,'mem')
var memT = []
var memR = []
ipc.on('addmemdata',function(event,data){
    if(memT.length > wathchpoint){
        memT.shift()
        memR.shift()
    } 
    memT.push([date.getHours(),date.getMinutes(),date.getSeconds()].join(':'))
    memR.push(data)
    memChart.setOption({
        xAxis:{
        data:memT
        },
        series:[{
        name:'usage',
        data:memR
        }]
    })
})

function initchart(obj,id){
    obj.setOption({
    title:{
        text:id
    },
    xAxis:{
        data:[],
        boundaryGap:false
    },
    yAxis:{
        min:0,
        max:100,
        offset:-20
    },
    series:[{
        name:'usage',
        type:'line',
        data:[],
        areaStyle:{
            color:'red'
        },
        lineStyle:{
            color:'black'
        }
    }]
    });
}