//map draw round get point Latitude and Longitude
export var CenterPointDrawRound={
    getRoundLatLng(angles,point,list,radius,doseValue){
        
        //角度(避免经度或维度相同)
        //var angles=[2,23,45,65,88,111,132,153,178,201,223,245,268,291,314,337];
        //var angles=[2,45,88,132,178,223,268,314,337];
        var centerLatLng=this.roundLatLngInit(point.getLng(),point.getLat());
        for(var i=0;i<angles.length;i++){
            var tmpLatLng=this.getRoundLatLngPosition(centerLatLng,radius,angles[i]);
            tmpLatLng.doseValue=doseValue;
            //tmpLatLng.roundName='r:'+angles[i]+'*'+i;
            tmpLatLng.isRound=true;
            list.push(tmpLatLng);
        }

    },
    roundLatLngInit(longitude, latitude){
        var Rc = 6378137;     //赤道半径
        var Rj = 6356725;     //极半径

        var m_LoDeg = parseInt(longitude);
        var m_LoMin = parseInt((longitude - m_LoDeg) * 60);
        var m_LoSec = (longitude - m_LoDeg - m_LoMin / 60) * 3600;

        var m_LaDeg = parseInt(latitude);
        var m_LaMin = parseInt((latitude - m_LaDeg) * 60);
        var m_LaSec = (latitude - m_LaDeg - m_LaMin / 60) * 3600;

        var m_Longitude = longitude;
        var m_Latitude = latitude;
        var m_RadLo = longitude * Math.PI / 180;
        var m_RadLa = latitude * Math.PI / 180;
        var Ec = Rj + (Rc - Rj) * (90 - m_Latitude) / 90;
        var Ed = Ec * Math.cos(m_RadLa);
        return {Ed:Ed,Ec:Ec,m_RadLo:m_RadLo,m_RadLa:m_RadLa};
    },
    /**
    * 求B点经纬度
    * @param centerLatLng 已知点的经纬度，
    * @param distance   AB两地的距离  单位km
    * @param angle  AB连线与正北方向的夹角（0~360）
    * @return  B点的经纬度
    */
    getRoundLatLngPosition(centerLatLng,distance,angle){
        var dx = distance * 1000 * Math.sin(Math.PI / 180 * angle);
        var dy = distance * 1000 * Math.cos(Math.PI / 180 *angle);
        var lng = (dx / centerLatLng.Ed + centerLatLng.m_RadLo) * 180/ Math.PI;
        var lat = (dy / centerLatLng.Ec + centerLatLng.m_RadLa) * 180/ Math.PI;
        
        return new AMap.LngLat(lng, lat);
    },
    //度 转换成 弧度
    DegreesToRadians(degrees)
    {
        var degToRadFactor = Math.PI / 180;
        return degrees * degToRadFactor;
    },
    //弧度 转换成 度
    RadiansToDegrees( radians)
    {
        var radToDegFactor = 180 / Math.PI;
        return radians * radToDegFactor;
    }

}
