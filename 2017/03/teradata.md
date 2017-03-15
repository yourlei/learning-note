# Teradata SQL

> 返回指定行数的查询结果

``` shell
select top 100 * from table;
```
or
``` shell
select * from table sample 100;
```

> substring(column, index, length)
``` shell
select SubString('name', 3, 8) from users;
```
or
> substr(text, index, length)
``` shell
select SUBSTR(text, index, length)
```

