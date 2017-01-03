> sftp命令
使用secureCIR打开sftp连接, 通过该方式可以进行远程和本地文件进行传输

``` shell
sftp> lpwd    # 查询当前工作目录(localhost)

sftp> pwd     # 远程主机上当前路径

sftp> lls     # 查询当前目录下文件(localhost)

sftp> lmkdir  # 本地新建文件夹

sftp> lrm     # 删除本地文件      

sftp> get remotehost filepath localhost path # get命令可以从远程主机上下载文件到本地, 如: get /home/data/log.txt C:/Users/admin/Documents

sftp> put localhost path remotehost filepath # 与get命令相反，put则将本地文件上传到远程主机, 如: put C:/Users/admin/Documents/temp.txt /home/data/

sftp> exit    # 退出sftp

```
> 关于sftp的更多使用可通过 man sftp 查看

> wc

``` shell
$ ls -l | wc -l      # 查看文件夹下文件个数
```