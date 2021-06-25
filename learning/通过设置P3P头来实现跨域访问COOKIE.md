```
设置 P3P HTTP Header，在隐含 iframe. 里面跨域设置 cookie 就可以成功。他们所用的内容是：

P3P: CP="CURa ADMa DEVa PSAo PSDo OUR BUS UNI PUR INT DEM STA PRE COM NAV OTC NOI DSP COR"

最后是我做的一个小小的演示：cookie 怎么在 vmx.cn 和 dup2.Net 之间交互

1. http://qiuyingbo.test.vmx.cn/cookie.php

2. 随便输入什么，点 reset cookie，就可以看到 vmx.cn 的 cookie 已经被设上了

3. 在该页面点连接到 http://www.dup2.net/vmx/cookie.html

4. 点"get corss-domain cookie" .. （此时 js 会去创建一个iframe，请求 qiuyingbo.test.vmx.cn ，返回页面把 cookie 值作为 GET 参数重定向回 dup2.net 的另外一个URL。）

5. 点 "display corss-domain cookie" .. 就可以看到 vmx.cn 的 cookie 了

6. 在该页面的输入框中输入其它的值，然后点 "set cross-domain cookie"，该行为将主动设置 vmx.cn 的 cookie

7. 点链接回到 http://qiuyingbo.test.vmx.cn/cookie.PHP ，就可以看到新的值了

```

```
实现在一个域名登录后，能自动完成另一个域名的登录，也就是PASSPORT的功能。

我只写一个大概，为了测试的方便，先编辑hosts文件，加入测试域名（C:\WINDOWS\system32\drivers\etc\hosts）

127.0.0.1       www.a.com
127.0.0.1       www.b.com

首先：创建 a_setcookie.php 文件，内容如下：

<?php 
//header('P3P: CP="CURa ADMa DEVa PSAo PSDo OUR BUS UNI PUR INT DEM STA PRE COM NAV OTC NOI DSP COR"'); 

setcookie("test", $_GET['id'], time()+3600, "/", ".a.com"); 
?>

然后：创建 a_getcookie.php 文件，内容如下：

<?php 
var_dump($_COOKIE); 
?> 

最后：创建 b_setcookie.php 文件，内容如下：

<script src="http://www.a.com/a_setcookie.php?id=www.b.com"></script>

－－－－－－－－－－－－－－－－－－－－－－－－－－－－

三个文件创建完毕后，我们通过浏览器依次访问：

http://www.b.com/b_setcookie.php
http://www.a.com/a_getcookie.php

我们会发现，在访问b.com域的时候，我们并没有在a.com域设置上cookie值。

然后我们修改一下a_setcookie.php文件，去掉注释符号，a_setcookie.php即为：

<?php  
header('P3P: CP="CURa ADMa DEVa PSAo PSDo OUR BUS UNI PUR INT DEM STA PRE COM NAV OTC NOI DSP COR"');  

setcookie("test", $_GET['id'], time()+3600, "/", ".a.com");  
?> 

再次通过浏览器依次访问：

http://www.b.com/b_setcookie.php
http://www.a.com/a_getcookie.php

这次，你会发现在访问b.com域的时候，我们设置了a.com域的cookie值。

末了补充一句，似乎只有IE对跨域访问COOKIE限制比较严格，上述代码在FIREFOX下测试，即使不发送P3P头信息，也能成功。
```

```
总结：
1、A跳转到B，B嵌套IFREAM A站点页面，A站点页面判断父级域名，URL传递COOKIE到B站点页面写COOKIE。

2、 另外可通过在A站点跳转前根据当前毫秒1分钟内和用户名生成密匙到数据库，跳转到B站点时URL带加密用户名，B站点去数据库取密匙，根据当前前毫秒1分钟和用户名还原密匙来验证登录。

```
