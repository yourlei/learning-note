<!-- 连接数据库 -->
psql -U gpadmin -d SZJWPASSDB -p 5555

gpssh -f hosts

gpssh -f hosts

vmstat 1


> psql 命令

##### 连接数据库

``` shell
psql -U $user -d $database -p  $port
```

##### 数据库切换

``` shell
\c database
```

> 调优

##### 查看数据分布

``` shell 
select gp_segment_id, count(*) from $tablename group by 1 order by 1
```

##### 查看数据库当前连接及执行的操作

``` shell
select * from pg_stat_activity;   # 查看当前连接，及提交的请求
```

> 增删改查

##### insert 

``` shell
insert into $table select * from $table
```

- 插入固定值
``` shell
insert into $table($col1, $col2, $col3) select $col1, $col2, $value from $table
```

##### alter

``` shell
alter table $tablename add column $columnname $type # 增加列
```

``` shell
alter table $tablename alter $columnname type $type



##### 删除数据

- 清空数据表

``` shell
truncate table $tablename
```

- 删除行数据

``` shell
delete from $table where $column = $value
```


