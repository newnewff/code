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
    mapEchartsInit() {
      const myChart = echarts.init(this.$refs.map);
      var option={
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
      };
      myChart.setOption(option, true);
    }
  },
  mounted() {
    this.$nextTick(function(){
      echarts.registerMap('全国地图',ditu);
      this.mapEchartsInit();
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
BIGMAP软件绘制离线的JSON地图文件
```
