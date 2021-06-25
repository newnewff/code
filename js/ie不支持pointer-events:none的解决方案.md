elementFromPoint、msElementsFromPoint）


在IE9下测试通过，但是只能解决click的问题，对于拖拽和ifream无效： 
```js
function noPointerEvents(em){
  em.onclick=function(e){
    this.style.display="none";
    var x=e.pageX,y=e.pageY,under=document.elementFromPoint(x,y);//返回当前页面上该坐标点内的顶层元素
    this.style.display="";
    e.stopPropagation(); 
    e.preventDefault();  
    //触发under，触发类型为e.type;
        $(under).trigger(e.type); 
  };
}
window.onload=function(){ noPointerEvents(tecVal); };

```

ie10解决方案，未测试：(IE10 引入了 msElementsFromPoint 和 msElementsFromRect 方法，这两个方法可以获得所有相交于指定的(X,Y)坐标或者矩形区域的所有元素，并返回节点列表。)
```js
window.addEventListener("click", testHit, false);  
function testHit(e)   
{  
  if (document.msElementsFromPoint)  //feature testing  
  {  
    var hitTargets = document.msElementsFromPoint(e.clientX, e.clientY);   
    // get elements from point                   
    for (var i = 0; i < hitTargets.length; i++)   
   {  
     if(hitTargets[i].nodeName.toUpperCase() == "DIV")  
     {  
       hitTargets[i].style.backgroundColor = "gray";   
     } //if it‘s a div, gray it out.                 
   }  
 }                 
}
```
