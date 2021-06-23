```C#
Point a = new Point(1, 1);
Point b = new Point(9, 9);
// 循环x坐标
for (int i = a.X + 1; i < b.X; i++)
  {
  // 计算斜率
  double k = ((double) (a.Y - b.Y))/(a.X - b.X);
  // 根据斜率,计算y坐标
  double y = k*(i - a.X) + a.Y;
  // 简单判断一下y是不是整数
  double d = y - (int) y;
  if (0.001 > d && d > -0.001)
  {
    Console.Write("点的坐标：{0},{1}", i, y);
  }
}
```


修改：
```C#
 private List<pointLatLng> GetPointToPoint_Middle_PointList(PointLatLng pointA,PointLatLng pointB,float range)
{
    List<PointLatLng> returnList=new List<PointLatLng>();
    for(double i=pointA.Lat;i>pointB.Lat;i=i-range)
    {
        double k=((double)(pointA.Lng-pointB.Lng))/(pointB.Lat-pointA.Lat);
        double y=k*(pointA.Lat-i)+pointA.Lng;
        returnList.Add(new PointLatLng(i,y));
    }
    return returnList;
} 
```

调用：
```c#
//北京机场到深圳机场
PointLatLng pointA=new PointLatLng(40.079884,116.588103);
PointLatLng pointB=new PointLatLng(22.642633,113.810906);
 pointList.AddRange(GetPointToPoint_Middle_PointList(pointA,pointB,0.01f));

//北京火车站到石家庄火车站
 pointList.AddRange(GetPointToPoint_Middle_PointList(pointA,pointB,0.001f));
```
