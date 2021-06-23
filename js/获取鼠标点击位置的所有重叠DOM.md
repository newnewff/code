```
function getPointDomList(dom) {
  var topDom = document.elementFromPoint(event.clientX, event.clientY);
  console.log(topDom);
  if (topDom.tagName != 'BODY') {
    topDom.style.pointerEvents = 'none';
    getPointDomList();
  }

}


<body  onclick="getPointDomList(this)">
```
