<!-- Inverse Distance Weighted js -->
//输入[[x:0,y:0,v:0],[x:0,y:0,v:0],[x:0,y:0,v:0]]
function idwcomputer(datas,result){
   if(datas.lenght<3) return result;
   var m0=datas.length;
   var m1=result.length;
   
   //console.info(datas);
   
   //距离列表
   var r=[];
   
   for(var i=0;i<m1;i++){
       for(var j=0;j<m0;j++){
             var tmpDis = Math.sqrt(Math.pow(result[i].x - datas[j].x, 2) + Math.pow(result[i].y - datas[j].y, 2));
             r.push(tmpDis);
       }
   }
   
   //插值函数
 
   for (var i = 0; i < m1; i++)
   {
       //查找重复
       var ifFind = false;
       for (var j = m0 * i; j < m0 * i + m0; j++)
       {
           if (Math.abs(r[j]) < 0.0001)
           {
               result[i].v = datas[j - m0 * i].v;
               ifFind = true;
               break;
           }
       }
 
       if (ifFind) continue;
 
       var numerator = 0;
       var denominator = 0;
 
       for (var j = m0 * i; j < m0 * i + m0; j++)
       {
           numerator += datas[j - m0 * i].v / (r[j] * r[j]);
           denominator += 1 / (r[j] * r[j]);
       }
     
       result[i].v = numerator / denominator;
   }
   return result;
