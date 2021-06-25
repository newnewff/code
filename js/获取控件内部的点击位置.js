function c(){
  var objTop = getOffsetTop(document.getElementById("d"));//对象x位置
  var objLeft = getOffsetLeft(document.getElementById("d"));//对象y位置

  var mouseX = event.clientX+document.body.scrollLeft;//鼠标x位置
  var mouseY = event.clientY+document.body.scrollTop;//鼠标y位置
  //计算点击的相对位置
  var objX = mouseX-objLeft;
  var objY = mouseY-objTop;
  clickObjPosition = objX + "," + objY;

  alert(clickObjPosition);
}

function getOffsetTop(obj){
  var tmp = obj.offsetTop;
  var val = obj.offsetParent;
  while(val != null){
    tmp += val.offsetTop;
    val = val.offsetParent;
  }
  return tmp;
}

function getOffsetLeft(obj){
  var tmp = obj.offsetLeft;
  var val = obj.offsetParent;
  while(val != null){
    tmp += val.offsetLeft;
    val = val.offsetParent;
  }
  return tmp;
}
