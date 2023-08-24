var list=[{a:'a',b:'b'}];
list.map((item)=>item.a);


/* 
        reduce 语法实现
        total    必需。初始值, 或者计算结束后的返回值。
        currentValue    必需。当前元素
        currentIndex    可选。当前元素的索引
        arr    可选。当前元素所属的数组对象。
   
    sumprice = array.reduce(function (total, currentValue, currentIndex, arr) {
        return total + currentValue.price;
    }, 0); */
list.reduce(function(total,item,index){
  var split=',';
  if(index==list.length-1} split='';
  return total+item.a+split;
});
