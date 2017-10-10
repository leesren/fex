# MongoDB 常见的问题

## 安全问题
* 链接mongodb 出现 ` Access control is not enabled for the database ` 的警告
是因为没有我们没有设置安全用户访问机制，所以需要我们创建用户，并分配访问权限
```shell
# 创建管理员
use admin
db.createUser(
  {
    user: "userAdmin", //用户名
    pwd: "123", //密码
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ] //权限
  }
)

# 添加用户
use exporting
db.createUser(
  {
    user: "tester",
    pwd: "123",
    roles: [ { role: "readWrite", db: "test" },
             { role: "read", db: "reporting" } ]
  }
)

# 测试连接
mongo --port 27017 -u "tester" -p "123" --authenticationDatabase "test"

```
