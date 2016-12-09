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
















> docker command

* run image

``` shell
$ docker run -it imageName /bin/bash
```

* map host port 
``` shell
$ docker rum -ti -p 80:8080 --name tomcat -H mytomcat tomcat
```

* list images information
``` shell
$ docker images
```

* list all container info
``` shell
$ docker ps -a
```

* list runing container info
``` shell
$ docker ps
```

* attach container
``` shell
$ docker attach containerID
```

* start container
``` shell
$ docker start -i containerID
```

* stop container
``` shell
$ docker stop containerID
```

* delete container
``` shell
$ docker rm containerID
```

* create images by container
``` shell
$ docker commit -m 'comment' containerID responcity:tag

$ docker commit -m 'my-centos' -a 'leiyu' 5b6764017545 centos:mycentos
```

```` shell
$ docker help commit

Usage: docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]

Create a new image from a container's changes

  -a, --author=       Author (e.g., "John Hannibal Smith <hannibal@a-team.com>")
  -c, --change=[]     Apply Dockerfile instruction to the created image
  --help=false        Print usage
  -m, --message=      Commit message
  -p, --pause=true    Pause container during commit
```

* mount host folder to contianer
``` shell
docker run -ti -v $(pwd):/tmp centos # 挂载当前目录到container 的/tmp 下
```
