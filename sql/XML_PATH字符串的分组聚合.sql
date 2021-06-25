SELECT parent, STUFF( ( SELECT ','+ child 
                        FROM t a 
                        WHERE b.parent = a.parent 
                        FOR XML PATH('')),1 ,1, '')  children
FROM t b 
GROUP BY parent
