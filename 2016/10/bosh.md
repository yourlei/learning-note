> bosh 命令

ssh 登录ops-manager, bosh 命令需登录到director主机

- 指定target
``` shell
bosh --ca-cert /var/tempest/workspaces/default/root_ca_certificate target 172.17.255.152 (director host)
```

- 指定deployment
``` shell
bosh -n deployment /var/tempest/workspaces/default/deployments/cf-8999cb8f6355c64bdf81.yml
```

- 查看虚机
``` shell
bosh vms
```

- 自动检查修复
```shell
bosh cck
```

- bosh ssh
``` shell
bosh ssh
```

- bosh start/stop vm
``` shell
bosh start / stop vmname
```

- bosh deploy 执行部署
``` shell
bosh deploy
```

- 查看task
``` shell
bosh tasks
```
