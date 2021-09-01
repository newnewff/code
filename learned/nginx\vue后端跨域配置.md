nginx发布配置:
```
location / {
      root F:\dist;
      try_files $uri $uri/ /index.html;
      index  index.html index.htm;
  }
  location /dev-api/net/{
          proxy_set_header Host $http_host;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header REMOTE-HOST $remote_addr;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_pass http://xxx.xxx.xxx.xxx:76/;
  }
   location /dev-api/{
          proxy_set_header Host $http_host;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header REMOTE-HOST $remote_addr;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_pass http://xxx.xxx.xxx.xxx:8080/;
  }
```


vue本地调试:
vue.config.js
```
devServer: {
  host: '0.0.0.0',
  port: port,
  proxy: {
    [process.env.VUE_APP_BASE_API_NET]: {
      target: `http://XXX.XXX.XXX.XXX:76`,
      changeOrigin: true,
      pathRewrite: {
        ['^' + process.env.VUE_APP_BASE_API_NET]: ''
      }
    },
    [process.env.VUE_APP_BASE_API]: {
      target: `http://XXX.XXX.XXX.XXX:8080`,
      changeOrigin: true,
      pathRewrite: {
        ['^' + process.env.VUE_APP_BASE_API]: ''
      }
    }
  },
  disableHostCheck: true
},
```
.env.development
```
VUE_APP_BASE_API = '/dev-api'
VUE_APP_BASE_API_NET = '/dev-api/net'
```

调用
src/api/xx.js
```
export function javaTest(){
  return request({
    url:'/test',
    method:'get'
  })
}
export function netTest(){
  return request({
    url:'net/test',
    method:'get'
  })
}
```
