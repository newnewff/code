 with tab as(
select ID,ParentID,Label from Node where ID=6
union all
select b.ID,b.ParentID,b.Label from tab a,Node b where a.ParentID=b.ID)
select * from tab; 
