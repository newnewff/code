Vue.nextTick():

```
在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
```
mounted 不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用 vm.$nextTick 替换掉 mounted：
```js
mounted: function () {
  this.$nextTick(function () {

  // Code that will run only after the
  // entire view has been rendered
  })
}
```


生命周期:https://www.jianshu.com/p/46c9d777cab1
