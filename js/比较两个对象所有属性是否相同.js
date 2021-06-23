 function checkIsSameObj(newObj, oldObj) {
    if (typeof newObj != typeof oldObj || (typeof newObj!='undefined' && newObj!=null && newObj.length != oldObj.length)) {
        return false;
    }
    if (typeof newObj == "object") {
        for (var key in newObj) {
            if (checkIsSameObj(newObj[key], oldObj[key]) == false) {
                return false;
            }
        }
        return true;
    } else {
        if (newObj == oldObj) {
            return true;
        } else {
            return false;
        }
    }
}
window.onload = function () {
    var a = {
        a1: 1, a2: 2, a3: { aa1: 1, aa2: 2, aa3: { aaa1: 1, aaa2: 2 } }, a4: 4, a5: { aa1: 1, aa2: 2, aa3: { aaa1: 1, aaa2: 2 } }
    };
    var b = {
        a1: 1, a2: 2, a3: { aa1: 1, aa2: 2, aa3: { aaa1: 1, aaa2: 2 } }, a4: 4, a5: { aa1: 1, aa2: 2, aa3: { aaa1: 1, aaa2: 2 } }
    };
    alert(checkIsSameObj(a,b));
};
