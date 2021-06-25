SELECT parent, STUFF( ( SELECT ','+ child 
                        FROM t a 
                        WHERE b.parent = a.parent 
                        FOR XML PATH('')),1 ,1, '')  children
FROM t b 
GROUP BY parent



select name=stuff(
(select '-'+name from student for xml path('')),1,1,'')
/*name是student表里的一个字段，格式如下：
name 
张三 
李四
王五

用一个sql语句输出以下格式：
张三-李四-王五*/


select COUNT(*),gii.GoodsInfoID,
stuff((select ','+imgSrc from GoodsInfoImg where GoodsInfoID=gii.GoodsInfoID for xml path('')),1,1,'') as z
from GoodsInfoImg as gii group by GoodsInfoID

select name=stuff((select '-'+Name from GoodsInfo for xml path('')),1,1,'')
