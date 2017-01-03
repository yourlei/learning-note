> greenplum 中安装postgis
在pivotal官网找到greenplum的扩展组件下载地址，执行命令安装

``` js
gppkg -i postgis-ossv2.0.3_pv2.0.1_gpdb4.3orca-rhel5-x86_64.gppkg
```
安装完成后，注意输出的信息中有一行提示，
``` shell
psql -d mydatabase -f $GPHOME/share/postgresql/contrib/postgis-2.0/postgis.sq
```
执行该命令会将postgis库中的函数加载到相应的数据库中
登录到数据库，验证postgis是否安装成功

``` shell
psql -d database -p port
\df ST_*;
```
若能输出很多ST_开头的函数，则说明安装成功