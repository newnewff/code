<!--vue-cli css pc to mobile-->

## 1.自定义第二套CSS
vue/src/main.js
```js
import { checkRunDeviceForLoadCss } from '@/utils/checkRunDevice';
Vue.prototype.APPRUNDEVICE = checkRunDeviceForLoadCss();
```

vue/src/utils/checkRunDevice.js
```js
export function checkRunDeviceForLoadCss() {
  var runDevice = 0;
  // 判断是否为移动端运行环境
  if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {

    if (window.location.href.indexOf("?mobile") < 0) {
      try {
        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        } else if (/iPad/i.test(navigator.userAgent)) {

        } else {

        }
        runDevice = 1;
      } catch (e) {
      }
    }
  } else {

    runDevice = 0;

  }
  return runDevice;
}

```

vue/src/views/xxx/xxx/xxx.vue
```js
<div :class="runDevice==1?'login-mobile':''" class="login">
</div>
<div v-if="runDevice==1"></div>
export default {
    data(){
        return{
             runDevice: this.APPRUNDEVICE
        }
    }
}
```

## 2.引入px2rem-loader将px转换成em

## 3.引入lib-flexible
