> docker install on centos6

> 升级系统内核(docker 官网要求的是3.10以上)

``` shell
$ cd /etc/yum.repos.d/
$ wget http://www.hop5.in/yum/el6/hop5.repo
$ yum install kernel-ml-aufs kernel-ml-aufs-devel
```

> 修改grub的主配置文件/etc/grub.conf,使用3.10的内核


> 重启系统, 查看内核

> uname -r