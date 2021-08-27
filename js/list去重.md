下标去重:
```
function unique(arr){
   　　var newArr = [arr[0]];
  　　 for(var i=1;i<arr.length;i++){
　　　　if(newArr.indexOf(arr[i]) == -1){
          　　 newArr.push(arr[i]);
    　　  }
        }
        return newArr;
   }
```

属性去重:
```
function unique(arr){
　　var res =[];

　　var json = {};

　　for(var i=0;i<arr.length;i++){
　　　　if(!json[arr[i]]){
　　　　　　res.push(arr[i]);

　　　　　　json[arr[i]] = 1;

　　　　}

　　}

　　return res;

}
```

es6 set() array.from()
```
var arr=[1,2,3,2,3,4,5];
var set =new Set(arr);
Array.from(set);
console.log(set)
```

reduce 去重
```
var newArr = arr.reduce(function (prev, cur) {
    prev.indexOf(cur) === -1 && prev.push(cur);
    return prev;
},[]);
```
reduce 求和
```
var sum = arr.reduce(function (prev, cur) {
    return prev + cur;
},0);
```
reduce 数组降维
```
let arr = [[1,2],[3,4],[5,6]].reduce((accumulator, current)=>accumulator.concat(current),[]);//[1, 2, 3, 4, 5, 6]
```
```
let arr = [0,[1],[2, 3],[4, [5, 6, 7]]];

let dimensionReduction = function (arr) {
    return arr.reduce((accumulator, current) => {
        return accumulator.concat(
            Array.isArray(current) ? 
            dimensionReduction(current) : 
            current
            );
    }, []);
}
dimensionReduction(arr); //[0, 1, 2, 3, 4, 5, 6, 7]
```
