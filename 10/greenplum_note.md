> greenplum 常用命令

> alter

- alter table name 
``` shell
alter table $tablename rename to $newtable;
```

- alter database owner
``` shell
alter database $databaseName owner to $newowner;
```

> create

- create user or role
``` shell
create user $usename;
```
*\h create user 查看详细的介绍*
---

- create database 
``` shell
create database $databaseName with owner $owner encodin='utf8'
```
- detail information 
<code>
	CREATE DATABASE name
    [ [ WITH ] [ OWNER [=] dbowner ]
           [ TEMPLATE [=] template ]
           [ ENCODING [=] encoding ]
           [ TABLESPACE [=] tablespace ]
           [ CONNECTION LIMIT [=] connlimit ] ]
</code>

- create table

``` shell
create table $tableName (
	$columnName $dataType
)
distributed by ($column1, $colmun2, ..)
```

- 使用create创建table时, 可以附加参数创建按column压缩存储的表结, 相关的参数如下:
<code>
where storage_parameter is:
   APPENDONLY={TRUE|FALSE}
   BLOCKSIZE={8192-2097152}
   ORIENTATION={COLUMN|ROW}
   COMPRESSTYPE={ZLIB|QUICKLZ|RLE_TYPE|NONE}
   COMPRESSLEVEL={0-9}
   CHECKSUM={TRUE|FALSE}
   FILLFACTOR={10-100}
   OIDS[=TRUE|FALSE]
</code>


- create external table



- Distribution key 



