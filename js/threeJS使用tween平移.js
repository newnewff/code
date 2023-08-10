// current1 相机当前的位置
// target1 相机的controls的target
// current2 新相机的目标位置
// target2 新的controls的target
var tween;

function animateCamera(current1, target1, current2, target2) {

    let positionVar = {
        x1: current1.x,
        y1: current1.y,
        z1: current1.z,
        x2: target1.x,
        y2: target1.y,
        z2: target1.z
    };
    //关闭控制器
    controls.enabled = false;
    tween = new TWEEN.Tween(positionVar);
    tween.to({
        x1: current2.x,
        y1: current2.y,
        z1: current2.z,
        x2: target2.x,
        y2: target2.y,
        z2: target2.z
    }, 1000);

    tween.onUpdate(function() {
        camera.position.x = positionVar.x1;
        camera.position.y = positionVar.y1;
        camera.position.z = positionVar.z1;
        controls.target.x = positionVar.x2;
        controls.target.y = positionVar.y2;
        controls.target.z = positionVar.z2;
        controls.update();
        console.log(positionVar);
    })

    tween.onComplete(function() {
        ///开启控制器
        controls.enabled = true;
    })

    tween.easing(TWEEN.Easing.Cubic.InOut);
    tween.start();
}
function render(){
  TWEEN.update();
}
