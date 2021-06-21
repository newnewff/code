#Inverse Distance Weighted
import math
from math import radians, cos, sin, asin, sqrt
import copy
def get_h(lon,lat,lst,maxGeoDistanceMeter,sumCount):
    p0 = [lon, lat]
    sum0 = 0
    sum1 = 0
    temp = []
    # 遍历获取该点距离所有采样点的距离
    for point in lst:
        if lon == point["x"] and lat == point["y"]:
            return point["value"]
        #Di = distance(p0, point)
        Di=geodistance(p0[0],p0[1],point["x"],point["y"])
        # new出来一个对象，不然会改变原来lst的值
        ptn = copy.deepcopy(point)
        ptn["distance"]=Di
        temp.append(ptn)
 
    # 根据上面ptn.append（）的值由小到大排序
    temp1 = sorted(temp, key=lambda point: point["distance"])
    if(temp1[0]["distance"]>maxGeoDistanceMeter):
       return 0
    else:
        # 遍历排序的前15个点，根据公式求出sum0 and sum1
        for point in temp1[0:sumCount]:
            sum0 += point["value"] / point["distance"]
            sum1 += 1 / point["distance"]
    
        return sum0 / sum1
 
 
# 计算两点间的距离
def distance(p, pi):
    dis = (p[0] - pi[0]) * (p[0] - pi[0]) + (p[1] - pi[1]) * (p[1] - pi[1])
    m_result = math.sqrt(dis)
 
    return m_result
#计算两个经纬度之间的距离
def geodistance(lng1,lat1,lng2,lat2):
    lng1,lat1,lng2,lat2 = map(radians, [float(lng1), float(lat1), float(lng2), float(lat2)])
    dlon=lng2-lng1
    dlat=lat2-lat1
    a=sin(dlat/2)**2 + cos(lat1) * cos(lat2) * sin(dlon/2)**2
    distance=2*asin(sqrt(a))*6371*1000 # 地球平均半径，6371km
    distance=round(distance/1000,3)
    return distance*1000
