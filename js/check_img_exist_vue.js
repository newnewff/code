var sharePicture = "http://路径/"+id+".jpg?random="+Math.random();
if (this.isImgUrl(sharePicture) == 'rejected') {
    this.sharePicture = "http://路径/"+id+".jpg?random="+Math.random();
} else {
    this.sharePicture = '';
}

// 判断图片是否存在
isImgUrl(imgurl) {
    return new Promise(function(resolve, reject) {
        var ImgObj = new Image(); //判断图片是否存在
        ImgObj.src = imgurl;
        ImgObj.onload = function(res) {
            resolve(res);
        }
        ImgObj.onerror = function(err) {
            reject(err);
        }
    });
}
