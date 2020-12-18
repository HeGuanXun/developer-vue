<template>
    <div class="canvasCont"></div>
</template>
<style lang="less">
.canvasCont{
    width: 760px;
    height: 400px;
    margin-left: 10px;
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
                this.wordsCloud(obj);
            }, 200);
        },
        // 画图表
        wordsCloud(obj) {
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
                let layout = d3.layout.cloud()
                    .size([width, height])
                    .words(datas)
                    .padding(5)
                    .rotate(function() { return ~~(Math.random() * 2) * 90; })
                    .font("Impact")
                    .fontSize(function(d) { return d.size; })
                    .on("end", draw);

                layout.start();

                function draw(words) {
                    let color = d3.scaleOrdinal(d3.schemeCategory20)
                    $(".canvasCont").html("");
                    d3.select(".canvasCont").append("svg")
                        .attr("width", layout.size()[0])
                        .attr("height", layout.size()[1])
                        .append("g")
                        .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
                        .selectAll("text")
                        .data(words)
                        .enter().append("text")
                        .style("font-size", function(d) { return d.size + "px"; })
                        .style("font-family", "Impact")
                        .attr("text-anchor", "middle")
                        .style("fill", function(d, i) {
                            return color(i);
                        })
                        .attr("transform", function(d) {
                            return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                        })
                        .text(function(d) { return d.text; });
                }
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
