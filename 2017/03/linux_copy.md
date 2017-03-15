# linux copy
> copy -f 强制覆盖已存在的文件
``` shell
copy -f sourcerfile targetfile
```

> copy -i 提示用户是否覆盖已存在的文件
``` shell
copy -i source target
```

> copy -R 拷贝文件和目录
```shell
copy -R dir1 dir2
```

> 多个文件输入时默认拷贝到最后一个目录
``` shell
copy -R ./dir1/a.txt ./dir2/b.txt ./dir3
```