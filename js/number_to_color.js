<!-- vue -->
export var doseColor={
    doseColors:[[0,230,0,0.1],[70,230,0,0.45],[255,246,0,0.85],[254,186,0,1],[254,146,0,1],[254,113,0,1],[255,70,0,1],[255,35,0,1],[235,0,0,1],[175,13,0,1]],
    doseColorsMethod:[[1,0,0],[1,1,0],[0,0,0],[0,0,0],[0,0,0],[1,0,0],[0,0,0],[0,0,0],[0,1,0]],
    doseSplit:[0,90,120,150,180,220,300,500,1000,10000],
    get(dose){
        var index=this.getIndex(dose);
        if( index==this.doseSplit.length){
            return this.doseColors[this.doseColors.length-1];
        }else{
         
            var colorEnd=this.doseColors[index+1];
            var colorStart=this.doseColors[index];
            var colorMethod=this.doseColorsMethod[index];
            var tmpPercentage=(this.doseSplit[index+1]-this.doseSplit[index]);
            var dosePercentage=(tmpPercentage-(this.doseSplit[index+1]-dose))/tmpPercentage;

            //计算颜色值与值换算比例
            var colorSum=0;
            for(var i=0;i<3;i++){
                colorSum+=Math.abs(colorEnd[i]-colorStart[i]);
            }

           // var nowSplitSum=this.doseSplit[index+1]-this.doseSplit[index];
            var colorDoseConvertPercentage=colorSum/100;
          
            var needColorValue=colorDoseConvertPercentage*dosePercentage*100;
         
            var returnColor=[];
            for(var i=0;i<3;i++){
                if(needColorValue>0){
                    if(colorMethod[i]==1){
                        var colorAttr=colorStart[i]+needColorValue;
                        if(colorAttr>255){
                            needColorValue=colorAttr-255;
                            colorAttr=255;
                        }else{
                            needColorValue=0;
                        }
                        returnColor.push(colorAttr/255);
                    }else if(colorMethod[i]==0){
                        var colorAttr=colorStart[i]-needColorValue;
                        if(colorAttr<colorEnd[i]){
                            colorAttr=colorEnd[i];
                            needColorValue=needColorValue-(colorEnd[i]-colorStart[i]);
                        }else{
                            needColorValue=0;
                        }
                        returnColor.push(colorAttr/255);
                    }
                }else{
                    returnColor.push(colorStart[i]/255);
                }
            }

            //var needAlphaValue=(colorEnd[3]-colorStart[3])/nowSplitSum*dosePercentage;
            var needAlphaValue=(colorEnd[3]-colorStart[3])/100*dosePercentage*100+colorStart[3];
          //  returnColor.push(1);
            returnColor.push(needAlphaValue);
        
            return returnColor;
        }

       
    },
    getIndex(dose){
        //计算辐值所在的范围数组下标
        var index=0;
        if(dose>=this.doseSplit[this.doseSplit.length-1]){
            index=this.doseSplit.length;
        }else{
            for(var i=0;i<this.doseSplit.length-1;i++){
                if(dose>=this.doseSplit[i] && dose<this.doseSplit[i+1]){
                    index=i;
                }
            }
        }
        return index;
    }
}
