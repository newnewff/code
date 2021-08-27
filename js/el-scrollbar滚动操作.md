```
<el-scrollbar ref="scroll"></el-scrollbar>
```
```
export default{
  data(){
  },
  methods:{
    scorllMoveRight:function(){
      //this.$refs.scroll.wrap.scrollWidth 总宽度
      var nowLeft=this.$refs.scroll.wrap.scrollLeft+(this.$refs.scroll.wrap.scrollWidth/10);
      if(nowLeft>this.$refs.scroll.wrap.scrollWidth){
        nowLeft=this.$refs.scroll.wrap.scrollWidth;
      }
      this.$refs.scroll.wrap.scrollLeft=nowLeft;
    },
    scrollMoveLeft:function(){
      var nowLeft=this.$refs.scroll.wrap.scrollLeft-(this.$refs.scroll.wrap.scrollWidth/10); 
      if(nowLeft<0){
        nowLeft=0;
      }
      this.$refs.scroll.wrap.scrollLeft=nowLeft;
    }
  }
}
```
