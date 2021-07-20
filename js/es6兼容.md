js中find的取代方案
``` js
<script>
//支持ie11
  var arr = [1,2,3,4,5,3,3]
    var  find = arr.find( function(x){
      return x == 0
  })
console.log(find)
 
 
//支持ie9
 
var findArr =arr.filter(function(x){
    return x == 0
})
console.log(findArr[0])
</script>

```
