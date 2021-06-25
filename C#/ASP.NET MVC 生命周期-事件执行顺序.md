```
vc程序启动顺序为
    1、assembly自定义属性：PreApplicationStartMethod的标识(MVC中在System.Web.Mvc程序集初始化时执行的添加httpmodules模块，并且绑定BeginRequest事件)。

    2、Global.asax中Application_Start

    3、httpModules模块中的Init方法。

    4、执行~/_appstart.cshtml或~/_appstart.vbhtml

    5、执行WebPageHttpModule中静态全局ApplicationStart事件

    6、执行WebPageHttpModule中静态全局Initialize事件

    7、绑定WebPageHttpModule模块中PostResolveRequestCache、BeginRequest、EndRequest事件。mvc的页面执行不是使用的BeginRequest事件中执行的，而是使用System.Web.Routing库实现的。

    8、HttpModules中ASP.NET生命周执行BeginRequest,PageInit,Load,Render

Razer模板执行顺序

1、第一次程序启动执行：_appstart.cshtml

2、第一次执行模板，递归当模板下目录中向上的所有_ViewStart.cshtml。

3、编译控制

4、执行各模板

5、输出内容
```

```
Request 请求到来
IIS 根据请求特征将处理权移交给 ASP.NET
UrlRoutingModule将当前请求在 Route Table中进行匹配
UrlRoutingModule在RouteCollection中查找Request匹配的RouteHandler,默认是MvcRouteHandler MvcRouteHandler 创建 MvcHandler实例.
 MvcHandler执行 ProcessRequest.
 MvcHandler 使用 IControllerFactory 获得实现了IController接口的实例,找到对应的HomeController
 根据Request触发HomeController的Index方法
Index将执行结果存放在ViewData
HomeController的Index方法返回 ActionResult
Views/Home/Index.aspx将 ViewData呈现在页面上
Index.aspx执行ProcessRequest方法
Index.aspx执行Render方法 输出到客户端
 

在使用MVC中是由IgnoreRoute()辅助方法对比成功的，会导致程序直接跳离MVC的执行生命周期，将程序继续执行的权利交回给IIS，由IIS决定接下来应该由哪个模块或哪个处理例程（Handler）来执行。

```


```
当我们对ASP.NET MVC网站发出一个请求的时候，会发生5个主要步骤：

步骤1：创建RouteTable

当ASP.NET应用程序第一次启动的时候才会发生第一步。RouteTable把URL映射到Handler。

步骤2：UrlRoutingModule拦截请求

第二步在我们发起请求的时候发生。UrlRoutingModule拦截了每一个请求并且创建和执行合适的Handler。

步骤3：执行MvcHandler

MvcHandler创建了控制器，并且把控制器传入ControllerContext，然后执行控制器。

步骤4：执行控制器

控制器检测要执行的控制器方法，构建参数列表并且执行方法。

步骤5：调用RenderView方法

大多数情况下，控制器方法调用RenderView()来把内容呈现回浏览器。

Controller.RenderView()方法把这个工作委托给某个ViewEngine来做。 
```
