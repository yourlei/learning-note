前几周因为需要用轨迹分析的项目用来做演示, 因此需要在虚机里搭建一个Greenplum环境存储轨迹数据, 再部署java程序到tomcat, 这里对整个环境搭建及java web项目部署做个记录.

实际项目里Greenplum是安装在六台服务上, 一个master节点和备份节点、16个segment.而本次单机安装系统环境是在centos6.7, 虚拟内存 1G、磁盘空间 20G. greenplum 版本为greenplum-db-4.3.8.1-build-1-RHEL5-x86_64, 安装包可以在pivotal的官网下载.

> Greenplum安装步骤

* 创建gpadmin用户组及用户

``` shell
$ groupadd -g gpadmin 3030 
$ useradd -u 3030 gpadmin -g gpadmin
$ passwd gpadmin 
```　

