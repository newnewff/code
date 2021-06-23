//check click dom is top layer
//判断点击的元素是否是顶层元素(重叠的元素都有事件触发，并且重复触发，底层元素事件可以if(isTopLayer($(this),e))){...})
function isTopLayer(panel, e) {
    var x = e.pageX, y = e.pageY;
    if (typeof x != 'undefined' && typeof y != 'undefined') {
        var under = document.elementFromPoint(x, y);//返回当前页面上该坐标点内的顶层元素
        return panel.is($(under));
    } else {
        return false;
    }
}
