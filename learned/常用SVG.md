commonly use SVG
```
播放按钮：
.play {
    cursor: pointer;
    fill: #FFFAF0;
    fill-rule: evenodd;
}  

<svg class="play" width="40" height="40">
    <path d="M8,8 L8,32 L30,20 Z">
    </path>
    <line x1="9" y1="33" x2="31" y2="21" style="stroke:black;stroke-width:1;"></line>
</svg> 

右箭头：
<svg class="next-flag" width="52" height="9" style="border:1px solid red;left:100px;top:0;right:0;">
  <path d="M50.000,4.243 L43.757,10.485 L43.757,6.000 L20.000,6.000 L20.000,3.000 L43.757,3.000 L43.757,-2.000 L50.000,4.243 Z"></path>
</svg>

下箭头：
<path d="M4,2 L8,2 L8,40 L12,40 L6,48 L0,40 L4,40 Z"></path>

上箭头：
<path d="M0,10 L6,2 L12,10 L8,10 L8,48 L4,48 L4,10 Z"></path>


::before画上箭头
.FeedBackLayer{
  width:100%;
  height:100px;
  border:1px solid red;
  position:relative;
}
.FeedBackLayer::before{
  content: ""; position: absolute; top: -6px; left: 20px;
  z-index:9999;
  background-color:white;
  border-right: 1px solid red; border-top: 1px solid red;
  width: 10px; height: 10px; transform: rotate(-45deg);

}
```
