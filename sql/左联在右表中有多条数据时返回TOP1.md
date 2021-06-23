<!--left join to many right join , return right top 1-->
```sql
select * from t as a left join t1 as b on a.code=b.code and b.id=(select top 1 id from t1 where a.code=code)
```
