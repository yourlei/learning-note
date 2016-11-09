> 权限管理

> 创建用户

``` shell
create role $username with $password;
```

> 用户操作表权限
表的操作权限包括 **select** **update** **insert** **delete**  **role** 

``` shell
grant select/update/insert/delete/rule on $table to $user;
```