<template>
    <div class="svgcss" id="bar"></div>
</template>
<style lang="less">
.svgcss{
    width: 760px;
    height: 400px;
    margin-left: 20px;
}
</style>
<script>
export default {
    data () {
        return {
            width:760,
            height:380,
            data:[]
        }
    },
    methods: {
        init (obj) {
            setTimeout(() => {
                this.bar(obj);
            }, 200);
        },
        // 画图表
        bar(obj) {
            if(undefined != obj){
                let _this = this;
                let width = this.width;
                if(undefined != obj.width){
                    width = obj.width;
                }
                let height = this.height;
                if(undefined != obj.height){
                    height = obj.height;
                }
                let datas = this.data;
                if(undefined != obj.data){
                    datas = obj.data;
                }
                let rectPad = 15;
                let padding = {left: 30,right: 30,top: 20,bottom: 20};
                // 初始化svg画布
                $('#bar').html("");
                let svg = d3.select('#bar').append('svg');
                svg.attr("width", width + 'px');
                svg.attr("height", height + 'px');
                // 创建比例尺
                let min = 0;
                let arr = [];
                for(let i=0;i<datas.length;i++){
                    arr.push(datas[i].value);
                }
                arr.sort(function (a, b) {
                    return a-b;
                });
                // let min = parseInt(arr[0]);
                let max = parseInt(arr[arr.length - 1]) + 5;

                let xScale = d3.scaleBand().domain(datas.map(d=>d.key)).range([0, width - padding.left - padding.right]);
                let yScale = d3.scaleLinear().domain([min, max]).range([0, height - padding.top - padding.bottom,0]);
                let yScaleAxis = d3.scaleLinear().domain([min, max]).range([height - padding.top - padding.bottom,0]); // 坐标轴值域取反，因为坐标原点在左上角
                // 设置x轴 y轴
                let xAxis = d3.axisBottom().scale(xScale);
                let yAxis = d3.axisLeft(yScaleAxis);
                // 添加x轴
                svg.append('g')
                    .attr('class', 'axis')
                    .attr('transform', 'translate(' + padding.left + ',' + (height - padding.bottom) + ')')
                    .call(xAxis);
                // 添加y轴
                svg.append('g')
                    .attr('class', 'axis')
                    .attr('transform', 'translate(' + padding.left + ',' + padding.top + ')')
                    .call(yAxis);
                let color = d3.scaleOrdinal(d3.schemeCategory20)
                // 添加柱状图
                svg.selectAll('rect')
                    .data(datas)
                    .enter()
                    .append('rect')
                    // 设置矩形从x,y轴哪一点开始绘制
                    .attr('x', function (d, i) {
                        return padding.left + xScale(d.key) + rectPad;
                    })
                    .attr('y', function (d, i) {
                        return height - padding.bottom - yScale(d.value)
                    })
                    // 设置矩形宽高
                    .attr('width', xScale.bandwidth()-padding.left)
                    .attr('height', function (d, i) {
                        return yScale(d.value)
                    })

                    // 添加鼠标移入移出事件，有个填充简便的效果
                    .on('mouseover', function (d, i) {
                        d3.select(this)
                            .transition()
                            .duration(200)
                            .attr('fill', 'green')
                    })
                    .on('mouseout', function (d, i) {
                        d3.select(this)
                            .transition()
                            .duration(500)
                            .attr('fill', 'steelblue')
                    })
                    .transition()
                    // .delay(function (d, i) {//延迟加载
                    //     return i * 10
                    // })
                    // .attr('fill', 'steelblue')
                    .attr('fill', function(d, i) {
                        return color(i);
                    })
                // 添加文字，同理
                svg.selectAll('.MyText')
                    .data(datas)
                    .enter()
                    .append('text')
                    .attr('class', 'MyText')
                    .attr('fill', 'black')
                    .attr('text-anchor', 'middle')
                    .attr('y', function (d, i) { return height - padding.bottom - yScale(d.value) - 20})
                    .attr('x', function (d, i) {
                        return padding.left + (width - padding.left - padding.right) / datas.length * i
                    })
                    .attr('dx', (width - padding.left - padding.right) / datas.length / 2)
                    .attr('dy', function (d, i) {
                        return '1.2em'
                    })
                    .text(function (d){
                        return d.value;
                    });
            }
        },
        randomColor(){
            let r = Math.floor(Math.random()*256);
            let g = Math.floor(Math.random()*256);
            let b = Math.floor(Math.random()*256);
            return "rgb("+r+","+g+","+b+")";
        }
    }
}
</script>
