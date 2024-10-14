<template>
  <div class="main">
     <div class="main_content" id="main" ref="main">
      <img v-if="mainImage.url" v-show="domsPos.length==0" style="height:98vh" :src="mainImage.url"/>
      <div v-for="item in domsPos" :style="`width:${}px;height:${}px;left:${}px;top:${}px;zIndex:${};`">
        <img :src="item.url" v-if="item.type=='image'" :style="`width:${}px;height:${}px;`"/>
        <span v-else-if="item.type=="sensor"></span>
      </div>
    </div>
  </div>
 
</template>

<script setup>
  import request from '@/utils/request'
  const main=ref(null)
  const doms=reactive([])
  const domsPos=reactive([])
  const mainImage=reactive([])

  request({url:'/data.json',method:'get'}).then((res)=>{
    doms.push(...res);
    const tmpMain = doms.find((item)=>item.name='mainImg');
    mainImage.width=tmpMain.width,mainImage.height=tmpMain.height,mainImage.url=tmpMain.url;

    nextTick(()=>{
      init();
    })
  })

  window.addEventListener('resize',init);

  function init(){
    const width=main.value.getBoundingClientRect().width;
    const height=main.value.getBoundingClientRect().height;
    domsPos.length=0;
    nextTick(()=>{
      if(width>0){
        doms.forEach((item)=>{
          let newObj={};
          for(let key in item){
            if(key=='left' || key=='width'){
              newObj[key]=item[key] * width/mainImage.width;
            }else if(key=='top' || key=='height'){
              newObj[key] = item[key] * height/mainImage.height;
            }else{
              newObj[key] = item[key]
            }
          }
          domsPos.push(newObj)
        })
      }else{
        setTimeout(init,10);
      }
    })
  }
</script>

<style lang="scss" scoped>
  .main{
    position:relative;
  }
  .main_content{
    display:inline-block;
  }
  .main_content>div{
    position:absolute;
  }
</style>
