```html
.bg_loading{   
   position: absolute;top:0;left:0;bottom:0;right:0;width:50%;height:50%;margin:auto;  color:#000000;
}   
.bg {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    outline: 0;
    -webkit-overflow-scrolling: touch;
    background-color: rgb(0, 0, 0);  
    filter: alpha(opacity=10);  
    background-color: rgba(0, 0, 0, 0.1); 
    z-index: 9999;
    text-align:center;
      margin:0 auto;
}

  <div class="bg" id="bg" style="display: none;"> <div class="bg_loading">加载中...</div> </div>

<script type="text/javascript">
    $(document).ready(function () {
       
    });
    $(document).ajaxStart(function () {
        $("#bg").show();
    });

    //ajax请求结束时移除loading  
    $(document).ajaxComplete(function () {
        $("#bg").hide();
    });
</script> 
```


vue+element ui
``` html

<div class="IDW-loading" v-loading="loading"></div>
<style>
   .IDW-loading .el-loading-mask{
    opacity:0.3;
  }
  .IDW-loading .circular{
    width:26px;height:26px;

  }
</style>
```
