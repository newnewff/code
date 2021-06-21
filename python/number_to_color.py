#根据值获取颜色
doseColors=[[0,230,0,0.1],[70,230,0,0.45],[255,246,0,0.85],[254,186,0,1],[254,146,0,1],[254,113,0,1],[255,70,0,1],[255,35,0,1],[235,0,0,1],[175,13,0,1]]
doseColorsMethod=[[1,0,0],[1,1,0],[0,0,0],[0,0,0],[0,0,0],[1,0,0],[0,0,0],[0,0,0],[0,1,0]]
doseSplit=[0,90,120,150,180,220,300,500,1000,10000]

 def RGB_to_Hex(rgb):
    #RGB = rgb.split(',')            # 将RGB格式划分开来
    color = '#'
    for i in rgb:
        num = int(i)
        # 将R、G、B分别转化为16进制拼接转换并大写  hex() 函数用于将10进制整数转换成16进制，以字符串形式表示
        color += str(hex(num))[-2:].replace('x', '0').upper()
    return color

def getDoseIndex(dose):
    #计算辐射值所在的范围数组下标
    index=0
    if dose>=doseSplit[len(doseSplit)-1]:
        index=len(doseSplit)
    else:
        for i,d in enumerate(doseSplit):
            if dose>=doseSplit[i] and dose<doseSplit[i+1]:
                index=i
    return index

def getDoseColor(dose):
    index=getDoseIndex(dose)
    if index==len(doseSplit):
        return doseColors[len(doseColors)-1]
    else:
        colorEnd=doseColors[index+1]
        colorStart=doseColors[index]
        colorMethod=doseColorsMethod[index]
        tmpPercentage=(doseSplit[index+1]-doseSplit[index])
        dosePercentage=(tmpPercentage-(doseSplit[index+1]-dose))/tmpPercentage

        #计算颜色值与辐射值换算比例
        colorSum=0
        for i in range(3):
            colorSum+=abs(colorEnd[i]-colorStart[i])
        colorDoseConvertPercentage=colorSum/100
        needColorValue=colorDoseConvertPercentage*dosePercentage*100
        returnColor=[]
        for i in range(3):
                if needColorValue>0:
                    if colorMethod[i]==1:
                            colorAttr=colorStart[i]+needColorValue
                            if colorAttr>255:
                                    needColorValue=colorAttr-255
                                    colorAttr=255
                            else:
                                    needColorValue=0
                            returnColor.append(colorAttr)
                    elif colorMethod[i]==0:
                            colorAttr=colorStart[i]-needColorValue
                            if colorAttr<colorEnd[i]:
                                    colorAttr=colorEnd[i]
                                    needColorValue=needColorValue-(colorEnd[i]-colorStart[i])
                            else:
                                    needColorValue=0
                            returnColor.append(colorAttr)
                else:
                    returnColor.append(colorStart[i])
        
        
        #print(str(dose)+'&&&&***'+str(returnColor))
        return RGB_to_Hex(returnColor)
