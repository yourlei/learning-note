> greenplum 数据去重

#### 查询重复数据

``` shell
select distinct id, count(*) from tableName group by id having count(*) > 1;
```

#### 查询要保留的数据

``` shell
select ctid, * from tableName where ctid in (select min(ctid) from tableName group by id);
```

#### 删除重复数据
``` shell
delete from tableName where ctid not in (select min(ctid) from tableName group by id)
``` 

#### greenplum 中删除重数据

``` shell
 DELETE FROM tableName USING 
(select gp_segment_id, ctid from 
(select gp_segment_id, ctid, rank() over (partition by name order by gp_segment_id, ctid) as rk from tableName ) foo 
WHERE rk <> 1) rows_to_delete 
WHERE tableName.gp_segment_id=rows_to_delete.gp_segment_id 
AND tableName.ctid=rows_to_delete.ctid;
```
--- 该方式删除分区表中重复数据时, 报错53000, 内存不足

#### 过滤重复数据

``` shell
DELETE FROM temp_deal_data USING temp_deal_data b
WHERE temp_deal_data.taxi_no = b.taxi_no AND temp_deal_data.begin_date = b.begin_date AND temp_deal_data.end_date = b.end_date and temp_deal_data.id < b.id;
```

#### 单车单天统计营业额、里程、交易量

``` shell
select to_date(begin_date, 'yyyy-mm-dd') ,taxi_no, sum(task_amount) as day_amount, sum(task_distance) as day_distance, taxi_type, company_id from sz_taxi_deal_data group by taxi_no, to_date(begin_date, 'yyyy-mm-dd'), taxi_type, company_id;
```



