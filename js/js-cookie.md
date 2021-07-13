5分钟:
```js
 Cookies.set('draw-message','1',{expires:new Date(new Date().getTime() + 5 * 60 * 1000)})
```

7天:
```js
Cookies.set('name', 'value', { expires: 7 });

//为当前页创建有效期7天的cookie
Cookies.set('name', 'value', { expires: 7, path: '' });
//json
Cookies.set('name', { foo: 'bar' });
```

删除
```js
Cookies.remove('name');

//如果值设置了路径，那么不能用简单的delete方法删除值，需要在delete时指定路径
Cookies.set('name', 'value', { path: '' });
Cookies.remove('name'); // 删除失败
Cookies.remove('name', { path: '' }); // 删除成功
//注意，删除不存在的cookie不会报错也不会有返回
```


通过withConverter方法可以覆写默认的decode实现，并返回一个新的cookie实例。所有与decode有关的get操作，如Cookies.get()或Cookies.get(‘name’)都会先执行此方法中的代码。
```js
document.cookie = 'escaped=%u5317';
document.cookie = 'default=%E5%8C%97';
var cookies = Cookies.withConverter(function (value, name) {
    if ( name === 'escaped' ) {
        return unescape(value);
    }
});
cookies.get('escaped'); // 北
cookies.get('default'); // 北
cookies.get(); // { escaped: '北', default: '北' }

//通过withConverter方法也可以覆写默认的encode实现，并返回一个新的cookie实例。
Cookies.withConverter({
    read: function (value, name) {
        // Read converter
    },
    write: function (value, name) {
        // Write converter
    }
});
```
