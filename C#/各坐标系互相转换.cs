//gps coordinate point convert

public class TempGps
{
    public double Tlng;
    public double Tlat;
}

public class GPS
{
    public string oLng;//经度 度分秒坐标
    public string oLat;//纬度 度分秒坐标

    public double lng;//经度 WGS-84
    public double lat;//纬度 WGS-84

    public double gLng;//经度 GCJ-02 中国坐标偏移标准 Google Map、高德、腾讯使用
    public double gLat;//纬度 GCJ-02 中国坐标偏移标准 Google Map、高德、腾讯使用

    public double bLng;//经度 BD-09 百度坐标偏移标准，Baidu Map使用
    public double bLat;//纬度 BD-09 百度坐标偏移标准，Baidu Map使用


    public double PI = Math.PI;
    double xPI = Math.PI * 3000.0 / 180.0;

    public TempGps delta(TempGps t)
    {
        var a = 6378245.0; //  a: 卫星椭球坐标投影到平面地图坐标系的投影因子。
        var ee = 0.00669342162296594323; //  ee: 椭球的偏心率。
        var dLat = this.transformLat(t.Tlng - 105.0, t.Tlat - 35.0);
        var dLng = this.transformLng(t.Tlng - 105.0, t.Tlat - 35.0);
        var radLat = t.Tlat / 180.0 * PI;
        var magic = Math.Sin(radLat);
        magic = 1 - ee * magic * magic;
        var sqrtMagic = Math.Sqrt(magic);
        return new TempGps() { Tlat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * PI), Tlng = (dLng * 180.0) / (a / sqrtMagic * Math.Cos(radLat) * PI) };
    }
    //WGS-84 to GCJ-02
    public void gcj_encrypt()
    {
        if (this.outOfChina(lng, lat))
        {
            gLng = lng;
            gLat = lat;
        }
        var t = this.delta(new TempGps() { Tlng = lng, Tlat = lat });
        gLng = t.Tlng + lng;
        gLat = t.Tlat + lat;
    }

    //GCJ-02 to WGS-84
    public void gcj_decrypt()
    {


        if (this.outOfChina(gLng, gLat))
        {
            lng = gLng;
            lat = gLat;

        }
        var t = this.delta(new TempGps() { Tlng = gLng, Tlat = gLat });
        lng = gLng - t.Tlng;
        lat = gLat - t.Tlat;
    }

    //GCJ-02 to BD-09
    public void bd_encrypt()
    {
        double x = gLng;
        double y = gLat;
        double z = Math.Sqrt(x * x + y * y) + 0.00002 * Math.Sin(y * xPI);
        double theta = Math.Atan2(y, x) + 0.000003 * Math.Cos(x * xPI);
        bLng = z * Math.Cos(theta) + 0.0065;
        bLat = z * Math.Sin(theta) + 0.006;
    }
    //BD-09 to GCJ-02
    public void bd_decrypt()
    {
        double x = bLng - 0.0065;
        double y = bLat - 0.006;
        double z = Math.Sqrt(x * x + y * y) + 0.00002 * Math.Sin(y * xPI);
        double theta = Math.Atan2(y, x) - 0.000003 * Math.Cos(x * xPI);
        gLng = z * Math.Cos(theta);
        gLat = z * Math.Sin(theta);
    }

    //WGS-84 to 度分秒坐标  
    public void wgs_decrypt()
    {
        oLng = TranDegreeToDMs(lng);
        oLat = TranDegreeToDMs(lat);
    }


    //度分秒坐标 to WGS-84
    public void wgs_encrypt()
    {
        lng = TranDMsToDegree(oLng);
        lat = TranDMsToDegree(oLat);
    }


    public double TranDMsToDegree(string _dms)
    {
        string[] dms = _dms.Split('.');
        if (dms.Length > 2)
            return double.Parse(dms[0]) + double.Parse(dms[1]) / 60 + double.Parse(dms[2] + "." + dms[3] ?? "0") / 3600;
        else
            return 0d;

    }


    private static string TranDegreeToDMs(double d)
    {
        int Degree = Convert.ToInt16(Math.Truncate(d));//度
        d = d - Degree;
        int M = Convert.ToInt16(Math.Truncate((d) * 60));//分
        int S = Convert.ToInt16(Math.Round((d * 60 - M) * 60));
        if (S == 60)
        {
            M = M + 1;
            S = 0;
        }
        if (M == 60)
        {
            M = 0;
            Degree = Degree + 1;
        }
        string rstr = Degree.ToString() + ".";
        if (M < 10)
            rstr = rstr + "0" + M.ToString();
        else
            rstr = rstr + M.ToString();
        if (S < 10)
            rstr = rstr + "0" + S.ToString();
        else
            rstr = rstr + S.ToString();
        return rstr;
    }

    private bool outOfChina(double _lng, double _lat)
    {
        if (lng < 72.004 || lng > 137.8347)
            return true;
        if (lat < 0.8293 || lat > 55.8271)
            return true;
        return false;
    }

    private double transformLat(double x, double y)
    {
        double ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.Sqrt(Math.Abs(x));
        ret += (20.0 * Math.Sin(6.0 * x * PI) + 20.0 * Math.Sin(2.0 * x * PI)) * 2.0 / 3.0;
        ret += (20.0 * Math.Sin(y * PI) + 40.0 * Math.Sin(y / 3.0 * PI)) * 2.0 / 3.0;
        ret += (160.0 * Math.Sin(y / 12.0 * PI) + 320 * Math.Sin(y * PI / 30.0)) * 2.0 / 3.0;
        return ret;
    }

    private double transformLng(double x, double y)
    {
        double ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.Sqrt(Math.Abs(x));
        ret += (20.0 * Math.Sin(6.0 * x * PI) + 20.0 * Math.Sin(2.0 * x * PI)) * 2.0 / 3.0;
        ret += (20.0 * Math.Sin(x * PI) + 40.0 * Math.Sin(x / 3.0 * PI)) * 2.0 / 3.0;
        ret += (150.0 * Math.Sin(x / 12.0 * PI) + 300.0 * Math.Sin(x / 30.0 * PI)) * 2.0 / 3.0;
        return ret;
    }
}

调用:
GPS t = new GPS();
t.oLng = dt.Rows[i][1].ToString();
t.oLat = dt.Rows[i][2].ToString();
t.wgs_encrypt();
t.gcj_encrypt();
t.bd_encrypt();
cells[i + 1, 3].PutValue(t.bLng);
cells[i + 1, 4].PutValue(t.bLat);
