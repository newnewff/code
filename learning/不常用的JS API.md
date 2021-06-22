# 不常用的JS API
```
window.getSelection() 返回一个 Selection 对象，表示用户选择的文本范围或光标的当前位置。
```
```
DataTransfer 对象用于保存拖动并放下（drag and drop）过程中的数据。当我们拖放文件、图片等等数据的时候就需要用到这个API.

document.addEventListenter((event) => {
  console.log(event.dataTransfer.getData("text/plain")); // 获取拖动的文字
  console.log(event.dataTransfer.getData(event.dataTransfer.getData("text/uri-list"))); // 获取拖动的文字
  
  
})
更多文档查看（https://developer.mozilla.org/zh-CN/docs/Web/API/DataTransfer）

```
```
Canvas图片 to File
var dataURL = canvas.toDataURL("image/jpeg", ratio);
var blob = dataURLtoBlob(dataURL);
var file = blobToFile(blob, '999');	
```
```
服务器去通知我们发生了某事件，而不是轮询服务器查询是否发生了什么事件。这时就可以用到EventSource。

	if (typeof (EventSource) !== "undefined") {
		var source = new EventSource("/sse/countDown");
		console.log(source);
		source.addEventListener("countDown", function(e) {
			document.getElementById("result").innerHTML = e.data;
		}, false);//使用false表示在冒泡阶段处理事件，而不是捕获阶段。
	} else {
		document.getElementById("result").innerHTML = "抱歉，你的浏览器不支持 server-sent 事件...";
```
