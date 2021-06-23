<!--SVG base-->

链接：https://www.jianshu.com/p/8ddb4ba85594

```
SVG 意为可缩放矢量图形（Scalable Vector Graphics）。
SVG 是使用 XML 来描述二维图形和绘图程序的语言。
SVG 图像在放大或改变尺寸的情况下其图形质量不会有所损失。
ie9+

---------------------------------------------------------------------------------------------------
SVG 文件可通过以下标签嵌入 HTML 文档：<embed>、<object> 、 <iframe>和<img>。
SVG的代码可以直接嵌入到HTML页面中，或直接链接到SVG文件。
<embed width="300px" height="300px" src="img/demo.svg" type="image/svg+xml" />

<object width="300px" height="300px" data="img/demo.svg" type="image/svg+xml"></object>

<iframe width="300px" height="300px" src="img/demo.svg"></iframe>

<svg width="500px" height="500px" style="margin:50px;" version="1.1" xmlns="http://www.w3.org/2000/svg"> <rect x="20" y="20" rx="10" ry="10" width="300" height="300" style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0);fill-opacity:0.1;stroke-opacity:0.9;opacity:0.9;"/> </svg>

<img src="img/demo.svg" width="300px" height="300px"/>

<a href="img/demo.svg">查看svg</a>

.container{ background: white url(img/demo.svg) repeat;}
------------------------------------------------------------------------------------
SVG形状
矩形 <rect>
圆形 <circle>
椭圆 <ellipse>
线 <line>
折线 <polyline>
多边形 <polygon>
路径 <path> 
 
矩形：
<svg width="500px" height="500px" style="margin:50px;" version="1.1" xmlns="http://www.w3.org/2000/svg"> <rect x="95" y="95" rx="20" ry="20" width="200" height="200" style="fill:rgb(99,99,99);stroke-width:2;stroke:rgb(33,33,33);fill-opacity:0.1;stroke-opacity:0.9;opacity:0.9;"></rect></svg>
x
    矩形左上角的x位置
y
    矩形左上角的y位置
rx
    圆角的x方位的半径
ry
    圆角的y方位的半径
width
    矩形的宽度
height
    矩形的高度
fill
    设置对象内部的填充颜色
fill-opacity
    控制填充色的不透明度（范围：0 - 1）
stroke
    定义矩形边框的颜色
stroke-opacity
    控制描边的不透明度（范围：0 - 1）
stroke-width
    定义矩形边框的宽度

圆形：
<svg xmlns="http://www.w3.org/2000/svg" version="1.1"> <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="#FF8C00" /></svg>
r
    圆的半径
cx
    圆点的x坐标
cy
    圆点的y坐标

椭圆：
<svg width="500px" height="500px" style="margin:50px;" version="1.1" xmlns="http://www.w3.org/2000/svg"> <ellipse cx="275" cy="125" rx="100" ry="50" style="fill:#7D9EC0;stroke:#6B6B6B;stroke-width:2;"></ellipse></svg>
cx
    椭圆中心的x坐标
cy
    椭圆中心的y坐标
rx
    定义的水平半径
ry
    定义的垂直半径

直线：
<svg width="600px" height="600px" version="1.1" xmlns="http://www.w3.org/2000/svg"> <line x1="0" y1="0" x2="100" y2="100" style="stroke:rgb(99,99,99);stroke-width:2;"></line> <line x1="100" y1="100" x2="0" y2="200" style="stroke:rgb(99,99,99);stroke-width:2;"></line></svg>
x1
    起点的x位置
y1
    起点的y位置
x2
    终点的x位置
y2
    终点的y位置

折线：
<svg style="height:300px;width:300px;" xmlns="http://www.w3.org/2000/svg" version="1.1"> <polygon points="100 10,40 180,190 60,10 60,160 180" style="fill:none;stroke:black;stroke-width:3"/></svg><!--五星 填充颜色--><svg style="height:300px;width:300px;" xmlns="http://www.w3.org/2000/svg" version="1.1"> <polyline points="100 10,40 180,190 60,10 60,160 180" style="fill:#EE2C2C;stroke:#EE2C2C;stroke-width:3" /></svg></svg>
points
    每个点必须包含2个数字，一个是x坐标，一个是y坐标。所以点列表 (0,0), (1,1) 和(2,2)可以写成这样：“0 0, 1 1, 2 2”。

多边形：
<svg width="300px" height="300px" version="1.1" xmlns="http://www.w3.org/2000/svg"> <polygon points="220,100 300,210 170,250 123,234" style="fill:#cccccc;stroke:#000000;stroke-width:1"/></svg>
points
    每个点必须包含2个数字，一个是x坐标，一个是y坐标。所以点列表 (0,0), (1,1) 和(2,2)可以写成这样：“0 0, 1 1, 2 2”。路径绘制完后闭合图形，所以最终的直线将从位置(2,2)连接到位置(0,0)。
-------------------------------------------------------------------------------------------
路径：
每一个命令都用一个关键字母来表示，比如，字母“M”表示的是“Move to”命令，当解析器读到这个命令时，它就知道你是打算移动到某个点。跟在命令字母后面的，是你需要移动到的那个点的x和y轴坐标。比如移动到(10,10)这个点的命令，应该写成“M 10 10”。这一段字符结束后，解析器就会去读下一段命令。每一个命令都有两种表示方式，一种是用大写字母，表示采用绝对定位。另一种是用小写字母，表示采用相对定位
M = moveto     移动到的点的x轴和y轴的坐标
L = lineto     需要两个参数，分别是一个点的x轴和y轴坐标，L命令将会在当前位置和新位置（L前面画笔所在的点）之间画一条线段。
H = horizontal lineto    绘制平行线
V = vertical lineto      绘制垂直线
C = curveto              三次贝塞尔曲线
S = smooth curveto       简写的三次贝塞尔曲线命令
Q = quadratic Bézier curve  二次贝塞尔曲线
T = smooth quadratic Bézier curveto   简写的二次贝塞尔曲线命令
A = elliptical Arc     弧形
Z = closepath             从当前点画一条直线到路径的起点

直线：
M
    移动到的点的x轴和y轴的坐标
L
    需要两个参数，分别是一个点的x轴和y轴坐标，L命令将会在当前位置和新位置（L前面画笔所在的点）之间画一条线段。
H
    绘制平行线
V
    绘制垂直线
Z
    从当前点画一条直线到路径的起点
<svg width="100px" height="100px" version="1.1" xmlns="http://www.w3.org/2000/svg"> <path d="M10 10 H 90 V 90 H 10 L 10 10"/></svg>
可以通过一个“闭合路径命令”Z来简化上面的path
<svg width="100px" height="100px" version="1.1" xmlns="http://www.w3.org/2000/svg"> <path d="M10 10 H 90 V 90 H 10 Z"/></svg>
相对命令使用的是小写字母，它们的参数不是指定一个明确的坐标，而是表示相对于它前面的点需要移动多少距离。相对坐标形式：
<svg width="100px" height="100px" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M10 10 h 80 v 80 h -80 Z" fill="transparent" stroke="black"/></svg>
图片


曲线：
绘制平滑曲线的命令有三个，其中两个用来绘制贝塞尔曲线，另外一个用来绘制弧形或者说是圆的一部分。
在path元素里，只存在两种贝塞尔曲线：三次贝塞尔曲线C，和二次贝塞尔曲线Q。

三次贝塞尔曲线需要定义一个点和两个控制点，所以用C命令创建三次贝塞尔曲线，需要设置三组坐标参数：C x1 y1, x2 y2, x y (or c dx1 dy1, dx2 dy2, dx dy)，最后一个坐标(x,y)表示的是曲线的终点，另外两个坐标是控制点，(x1,y1)是起点的控制点，(x2,y2)是终点的控制点。

<svg width="190px" height="160px" version="1.1" xmlns="http://www.w3.org/2000/svg"> <path d="M130 110 C 120 140, 180 140, 170 110" stroke="black" fill="transparent"/> </svg>

图片


简写的贝塞尔曲线命令S

一个点某一侧的控制点是它另一侧的控制点的对称（以保持斜率不变）。可以使用一个简写的贝塞尔曲线命令S：S x2 y2, x y (or s dx2 dy2, dx dy)，S命令可以用来创建与之前那些曲线一样的贝塞尔曲线，但是，如果S命令跟在一个C命令或者另一个S命令的后面，它的第一个控制点，就会被假设成前一个控制点的对称点。如果S命令单独使用，前面没有C命令或者另一个S命令，那么它的两个控制点就会被假设为同一个点。

<svg width="190px" height="160px" version="1.1" xmlns="http://www.w3.org/2000/svg"> <path d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="black" fill="transparent"/> </svg>

图片

二次贝塞尔曲线
二次贝塞尔曲线Q比三次贝塞尔曲线简单，只需要一个控制点，用来确定起点和终点的曲线斜率。需要两组参数，控制点和终点坐标。Q命令：Q x1 y1, x y (or q dx1 dy1, dx dy)


<svg width="190px" height="160px" version="1.1" xmlns="http://www.w3.org/2000/svg"> <path d="M10 80 Q 95 10 180 80" stroke="black" fill="transparent"/></svg>

图片

简写的贝塞尔曲线命令T

就像三次贝塞尔曲线有一个S命令，二次贝塞尔曲线有一个差不多的T命令，可以通过更简短的参数，延长二次贝塞尔曲线。T x y (or t dx dy)，快捷命令T会通过前一个控制点，推断出一个新的控制点。这意味着，在你的第一个控制点后面，可以只定义终点，就创建出一个相当复杂的曲线。需要注意的是，T命令前面必须是一个Q命令，或者是另一个T命令，才能达到这种效果。如果T单独使用，那么控制点就会被认为和终点是同一个点，所以画出来的将是一条直线。

<svg width="190px" height="160px" version="1.1" xmlns="http://www.w3.org/2000/svg"> <path d="M10 80 Q 52.5 10, 95 80 T 180 80" stroke="black" fill="transparent"/></svg>


图片

弧形
A命令的参数：
A rx ry x-axis-rotation large-arc-flag sweep-flag x y
或者 a rx ry x-axis-rotation large-arc-flag sweep-flag dx dy

弧形命令A的前两个参数分别是x轴半径和y轴半径，弧形命令A的第三个参数表示弧形的旋转情况，large-arc-flag（角度大小） 和sweep-flag（弧线方向），large-arc-flag决定弧线是大于还是小于180度，0表示小角度弧，1表示大角度弧。sweep-flag表示弧线的方向，0表示从起点到终点沿逆时针画弧，1表示从起点到终点沿顺时针画弧。



<svg width="320px" height="320px" version="1.1" xmlns="http://www.w3.org/2000/svg"> <path d="M10 315 L 110 215 A 30 50 0 0 1 162.55 162.45 L 172.55 152.45 A 30 50 -45 0 1 215.1 109.9 L 315 10" stroke="black" fill="green" stroke-width="2" fill-opacity="0.5"/></svg>
图片



原理分析：
如图例所示，画布上有一条对角线，中间有两个椭圆弧被对角线切开(x radius = 30, y radius = 50)。第一个椭圆弧的x-axis-rotation（x轴旋转角度）是0，所以弧形所在的椭圆是正置的（没有倾斜）。在第二个椭圆弧中，x-axis-rotation设置为-45，所以这是一个旋转了45度的椭圆，并以短轴为分割线，形成了两个对称的弧形。



小圆点确定点的位置：
 <svg width="52" height="9" >
        <path d="M50.000,4.243 L43.757,10.485 L43.757,6.000 L10.000,6.000 L10.000,3.000 L43.757,3.000 L43.757,-2.000 L50.000,4.243 Z" class="cls-1"></path>
         <circle cx="0" cy="4.243" r="2" fill="red"/>
    </svg>


```
