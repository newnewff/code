```
<template>
  <div class="map" ref="map"></div>
</template>

<script>
import echarts from "echarts";
const ditu=require("@/components/map/china.json");



export default {
  name: "Map",
  methods: {
    mapEchartsInit(ditu) {
     
      const myChart = echarts.init(this.$refs.map);
      
      /*var option={
        series: [
          {
            name: 'ditu',
            type: 'map',
            mapType: '全国地图',
            roam: false,
            itemStyle: { //控制镇名文字显示
              areaColor: 'rgb(0,0,49)', //区域背景颜色
              borderColor: '#ffffff', //描边颜色
              emphasis: { //高亮状态下的样式
                label: { show: false },
                itemStyle: {
                  color: 'rgb(0,0,49)'
                }
              }
            },
            data: []
          }
        ]
      };*/
      /* 在 ECharts 3 中不再建议在地图类型的图表使用 markLine 和 markPoint。如果要实现点数据或者线数据的可视化，可以使用在地理坐标系组件上的散点图和线图。*/
      var dianzhanDialog=['{title|{b}'].join('\n');
      var baseLabel={show:true,verticalAlign:'top',align:'left',formatter:dianzhanDialog,rich:{title:{fontSize:16},hr:{borderColor:'#fff',width:'100%',borderWidth:0.5,height:0}}};
      var dialogPosition={x:0.8,y:0.87};
      var obj1Label=JSON.parse(JSON.stringify(baseLabel));
      obj1Label.formatter=['{title|{b}','aaa','bbbb'].join('\n');
      var option={
        geo:[{
          map:'全国地图',roam:false,itemStyle:{}
        }],
        series:[
          {
            type:'lines',polyline:true,data:[{name:'aaa',coords:[[111,22],[122,33],[133,44]]}]
          },
          {
            type:'lines',data:[{name:'aaa',coords:[[133,44][133+dialogPosition.x,44+dialogPosition.y]],label:obj1Label}]
          },
          {
            type:'effectScatter',data:[[111,22],[222,33]]
          }
        ]
      }
      
      myChart.setOption(option, true);
    }
  },
  mounted() {
    this.$nextTick(function(){
      echarts.registerMap('全国地图',ditu);
      this.mapEchartsInit();
      
       /*
        $.get('/components/map/china.json',function(ditu){
           echarts.registerMap('全国地图',ditu);
            this.mapEchartsInit();
        })
      */
    });
  }
};
</script>

<style scoped>
.map {
  height: 500px;
}
</style>
```

```
GEOJSON地图数据下载：http://datav.aliyun.com/tools/atlas/#&lat=30.332329214580188&lng=106.72278672066881&zoom=3.5
BIGMAP软件获取地图数据 http://www.bigemap.com/reader/download/ 
地图数据二次编辑：http://geojson.io/#map=4/34.42/103.36

```
