#PYTHON生成点图加载到地图(bokeh.plotting.hex)
import datetime

import numpy as np
import sys
import traceback
import os
import json
from bokeh.io import export_png,show,output_file,export_svg
from bokeh.plotting import figure

def getParams(javaParams):
    returnParams={
        "datalist":{},
        "imageWidth":800,
        "imageHeight":600,
        "dataFile":"",
        "rowCount":20,   #每行多少个点
        "isShowDefaultPoint":False,   #是否显示原始点
        "fillAlpha":0.37,  #扩展点透明度
        "outPath":"",
        "maxGeoDistanceScale":6.5,  #扩散范围,最小值为1,为1时是正方形
        "sumCount":15  #距离比对点数量,会改变计算精度
        }
    for key in javaParams:
        returnParams[key]=javaParams[key]
    if returnParams["maxGeoDistanceScale"]<1:
        returnParams["maxGeoDistanceScale"]=1
    return returnParams

returnMessage={}
run_starttime = datetime.datetime.now()
try:
    __name__ = '__main__'
    #sys.argv=[ "python", "F:\\project\\python\\out_image.py", "{'dataFile':'F:\\project\\python\\json.txt'}" ]
    #datalist  {'data':[{"x":128.126678,"y":42.422499,"value":109.33453217148781},{"x":128.126411,"y":42.4224,"value":101.38645395636559}],'min_x':128.124252,'max_x':128.137817,'min_y':42.419788,'max_y':42.423298}
    if __name__ == '__main__':
        javaParams= json.loads(json.dumps(eval(sys.argv[1])))
       
        params=getParams(javaParams)
      
        if(params["outPath"]!="" and params["dataFile"]!="" and os.path.exists(params["dataFile"])):
            with open(params["dataFile"], "r") as f:
                txtData=f.read()
                params["datalist"]=  json.loads(json.dumps(eval(txtData)))
              
                
       
        if "data" in params["datalist"] and "min_x" in params["datalist"] and "max_x" in params["datalist"] and "min_y" in params["datalist"]  and "max_y" in params["datalist"] and len(params["datalist"]["data"])>1:
            dataList=params["datalist"]
            #生成绘制区域
            row_count=params['rowCount']
            column_count=int(row_count+(row_count/6)+1)
            size=params["imageWidth"]/row_count*(row_count>=20 and 1 or (1-(20-row_count)/100))
            x_range=(dataList['max_x']-dataList['min_x'])/row_count
            y_range=(dataList['max_y']-dataList['min_y'])/row_count

            figure_range=3
            figure_x_min_range=dataList['min_x']-x_range*figure_range
            figure_x_max_range=dataList['max_x']+x_range*figure_range
            figure_y_min_range=dataList['min_y']-y_range*figure_range
            figure_y_max_range=dataList['max_y']+y_range*figure_range
            figure_x_range=(figure_x_max_range-figure_x_min_range)/(row_count+4)
            figure_y_range=(figure_y_max_range-figure_y_min_range)/row_count

            maxGeoDistanceMeter=geodistance(dataList['min_x'],dataList['min_y'],dataList['max_x'],dataList['max_y'])/params["maxGeoDistanceScale"]

            p = figure(plot_width=params["imageWidth"], plot_height=params["imageHeight"],x_axis_location=None,y_axis_location=None,match_aspect=True, toolbar_location=None,border_fill_color=None,outline_line_color=None,background_fill_color=None,x_range=[figure_x_min_range,figure_x_max_range],y_range=[figure_y_min_range,figure_y_max_range], output_backend="svg" )
        
            p.grid.visible = False

            #生成原始点
            if(params["isShowDefaultPoint"]):
                scatter_x=[]
                scatter_y=[]
                scatter_color=[]
                for data in dataList["data"]:
                    scatter_x.append(data['x'])
                    scatter_y.append(data['y'])
                    scatter_color.append(getDoseColor(data['value']))
                p.scatter(scatter_x,scatter_y, size=size/3,fill_color=scatter_color, fill_alpha=1,line_color='#ffffff')

            #生成扩展区域点
            rowRightMove=(size/2)/(params["imageWidth"]/(dataList['max_x']-dataList['min_x']))
            rowBottomMove=rowRightMove/4
            hex_x=[]
            hex_y=[]
            hex_color=[]
            for i in range(column_count):
                for j in range(row_count):
                    tmp_y=(dataList['min_y']+i*figure_y_range)
                    tmp_x=(dataList['min_x']+j*figure_x_range)+(i%2==1 and rowRightMove or 0)
                    tmpValue=get_h(tmp_x,tmp_y,dataList["data"],maxGeoDistanceMeter,params["sumCount"])

                    if(tmpValue!=0):
                        hex_x.append(tmp_x)
                        hex_y.append(tmp_y)
                        hex_color.append(getDoseColor(tmpValue))
            p.hex(hex_x, hex_y,line_color=None,size=size, fill_color=hex_color,fill_alpha=params["fillAlpha"],angle=0.52)
            returnMessage["status"]='200'
            returnMessage["StartPoint"]=str(figure_x_min_range)+","+str(figure_y_max_range)
            returnMessage["EndPoint"]=str(figure_x_max_range)+","+str(figure_y_min_range)
            export_svg(p, filename=params["outPath"])
            #output_file(params["outPath"])

except Exception as e:
    returnMessage["status"]='400'
    returnMessage['error']=traceback.format_exc()
    
finally:
    returnMessage["runTime"]=(datetime.datetime.now() - run_starttime).seconds
    print(returnMessage)

