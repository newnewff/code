end_time in (select max(end_time) from BILLS group by theodolite)
