main.js
```js
Vue.prototype.$onkeydown = function (vm, methodName, code) {
  document.onkeydown = function () {
    setKeyMethod(vm, methodName, code);
  };
  
}
Vue.prototype.$onkeyup = function (vm, methodName, code) {
  document.onkeyup = function () {
    setKeyMethod(vm, methodName, code);
  };
}
function setKeyMethod(vm, methodName, code){
  let key = window.event.keyCode;
  if (key == code) {
    vm[methodName](code); 
  }
}
```

component:
```js
mounted () {
            this.$onkeydown(this, 'onkeydown', 32);
            this.$onkeyup(this, 'onkeyup', 32);
        }
methods:{
  onkeydown(){
   ...
  },
  onkeyup(){
     ...
  }
}
```
