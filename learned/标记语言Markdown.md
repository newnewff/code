Markdown 是一种轻量级标记语言,文件后缀名为md

## vscode写Markdown  
安装Markdown All in One和Markdown Preview Github Styling

## 常用语法
```
缩进:&emsp;为一个汉字间距.  
&ensp;语  
&nbsp;语  
&#8194;语  
&#160;语  
&emsp;语  
&#8195;语
```
语  
&ensp;语  
&nbsp;语  
&#8194;语  
&#160;语  
&emsp;语  
&#8195;语

---

```
换行:  
换两行为1.5倍行距换行.  
在第一行最后敲两个回车,换一行为1倍行距换行.  
</br>
```

```
列表:无序前面加-,有序列表前面加数字和点(1.)
```

```
代码块:```开始, ```结束.开始```后面可以加上代码种类,如:```c  ```cpp  ```ruby  ```yml
```

```
行内代码块:``开始,``结束
```

```
标题:# 为一级标题,## 为二级标题,### 为三级标题...  
也可以在标题文字下面一行加上=为一级标题,加上-为二级标题
```

```
html:支持html标签
```

---
```
字体:  
*开始*结束,中间为倾斜字体.  
**开始,**结束,中间为加粗字体.  
颜色:$\color{#000000}{yellowText}$，$\color{green}{greenText}$
字体:$\mathsf{ABCDEFGHIJKLMNOPQRSTUVWXYZ}$
$\mathcal{ABCDEFGHIJKLMNOPQRSTUVWXYZ}$
$\mathscr{ABCDEFGHIJKLMNOPQRSTUVWXYZ}$
$\mathfrak{ABCDEFGHIJKLMNOPQRSTUVWXYZ}$
```
$\color{#000000}{yellowText}$，$\color{green}{greenText}$
$\mathsf{ABCDEFGHIJKLMNOPQRSTUVWXYZ}$
$\mathcal{ABCDEFGHIJKLMNOPQRSTUVWXYZ}$
$\mathscr{ABCDEFGHIJKLMNOPQRSTUVWXYZ}$ 
$\mathfrak{ABCDEFGHIJKLMNOPQRSTUVWXYZ}$




---
```
插入图片及链接:
![图片名称](../aa.jpg)  
![网络图片名称](http://www.aa.com/aa.jpg)  
<img src="http://www.aa.com/aa.jpg" width=20% height=20%/>

[链接文字](http://www.baidu.com)
```
[链接文字](http://www.baidu.com)


---

```
插入公式:支持Latex公式  
$$
\lim_{x \to \infin}f(x)
$$

行间距:
$$
aagfdgfd  
\\[5ex]  
bb
$$

右对齐:
$$
\begin{aligned}   
aagfdgfd\\[5ex]
bb
\end{aligned} 
$$

```
$$
\lim_{x \to \infin}f(x)
$$

---

```
表格:  
用户名（默认左对齐） | 性别(中间对齐) | 年龄（右侧对齐）
--- | :---: | ---:
张三 | 男 | 23
```
用户名（默认左对齐） | 性别(中间对齐) | 年龄（右侧对齐）
--- | :---: | ---:
张三 | 男 | 23

---

```
分割线:---
```

```
引用:在一行前面加上>:或>,可多个>嵌套
```

---
```
勾选:  
- [ ] 不勾选
- [x] 勾选
```
- [ ] 不勾选
- [x] 勾选

---

---
---
---
---
---
---
MarkDown 没有统一标准，不同网站实现的方式不同；
GitHub 实现的 MarkDown 语法叫 GFM，GitHub Favorite MarkDown；
GFM 比普通的 MarkDown 语法增加了表格和完成列表，等语法；
但是，GFM 并没有实现流程图及以下的 MarkDown 语法。



```
流程图/时序图/类图/状态图/实体关系图/用户旅程图/甘特图/饼形图/需求图  
https://mermaid-js.github.io/mermaid/#/
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;


```

```
上标：30^th^    th变为上标
下标：H~2~O     2变为下标
脚注：Content [^1]  
[^1]:Hi 这里是一个注脚，会自动拉到最后面排版

缩略:  
*[HTML]: 超文本标记语言  
*[W3C]:  World Wide Web Consortium  
The HTML specification
is maintained by the W3C.

在段落中填写 [TOC] 以显示全文内容的目录结构。

标记:==marked==
```


