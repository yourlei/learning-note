> mysql 基础

> mysqldump备份数据库
进入安装mysql的bin目录下, 命令行下执行以下命令：

``` shell
mysqldump -u root -p dbname tablename > e:backup.sql
```
如果不输入表名, 则备份的是整个数据库.

