# Mac install MySQL 5.7
Mac 安装 mysql 有两种方式，最简单的是直接使用.dmg安装。
另一种就是使用压缩包，然后自己自定义配置
* [.dmk 安装mysql](https://dev.mysql.com/doc/refman/5.7/en/osx-installation-pkg.html) 
* tar 文件包安装 mysql 5.7 [参考](https://www.widlabs.com/article/mac-os-x-install-mysql-57-with-tar-gz)
1. 官网下载 MySQL 5.7 文件包
2. 解压文件 并安装 mysql
```bash
# 解压文件
tar zxvf mysql-5.7.18-macos10.12-x86_64.tar.gz

# 移动解压的二进制包文件到安装目录
sudo mv mysql-5.7.18-macos10.12-x86_64 /usr/local/mysql

# 更改mysql安装目录的所属用户和用户组，就是授权意思
cd /usr/local
sudo chrown -R root:wheel mysql 

# 切换到mysql安装目录并执行初始化命令并记录生成临时root密码
cd /usr/local/mysql
sudo bin/mysqld --initialize --user=mysql
```
>注意:需要记录在初始化完成后命令行窗口中显示的临时 root 密码, 如图:
![密码](https://www.widlabs.com/wp-content/uploads/2017/02/2017021722535148.png)
3. 测试 启动、重启和停止
```bash
cd /usr/local/mysql

# 测试启动
sudo support-files/mysql.server start

# 重启
sudo support-files/mysql.server restart 

# 停止
sudo support-files/mysql.server stop

# 检查MySQL运行状态
sudo support-files/mysql.server status

```
4. 修改 MySQL root 初始化密码，输入初始化给的密码，注意大小写，最好直接复制粘贴到密码输入处
```bash
# 需要mysql启动的情况下
cd /usr/local/mysql/bin

./mysqladmin -u root -p 新密码

```

5. 把mysql添加到环境变量
    * 使用 alias 别名
    * 写入到环境变量
直接在`bash`窗口使用mysql
```bash
########  别名
# mysql 前缀
alias mysql=/usr/local/mysql/bin/mysql

# mysqladmin 前缀
alias mysqladmin=/usr/local/mysql/bin/mysqladmin

########  写入环境变量 echo 命名

echo 'MYSQL_HOME=/usr/local/mysql' >> ~/.bash_profile
echo 'export PATH=${PATH}:$MYSQL_HOME/bin' >> ~/.bash_profile

``` 
## mysql 常见查询语句,注意分号表示结束
* 查看mysql的默认user表 
```bash
# 连接mysql 
mysql -u root -p;

# 退出命令行窗口
quit;

# 查看所有的数据库
show databases;

# 选择mysql数据库
use mysql;

# 查看user表结构
desc user;

# 更改用户名密码 这个跟5.7以前的是password 字段，5.7是 authentication_string
update mysql.user set authentication_string=PASSWORD('123456') where user='root';
set password for rott@localhost=password('123456');
```  

## 遇到的问题 [linux 命令大全](http://man.linuxde.net/par/2)
* `alias` 命令
* `echo` [命令](https://linux.cn/article-3948-1.html)
在bash shell 使用别名，这样就不用输入一大串的路径了
* 重启 shell 窗口 `exec $SHELL`
* `chown` 更改所属用户和用户组 `chown(选项)(参数)` , 如：`chown root:admin www` [mac root:wheel](http://blog.csdn.net/qdujunjie/article/details/33713293) 
* `mv` 移动文件到指定目录 如：`mv mysql-5.7.9 /usr/local/mysql`
* `tar` 解压文件如： `tar zxvf mysql.tar.gz`

## mysql 使用问题集锦
* 创建唯一值
创建唯一值得常见的有2中方式：[参考](http://www.studymysql.com/mysql/unique.html%20constraint)
1. 创建主键primary key 【指定唯一，但是只能是单个列】，
2. 创建唯一索引 unique index 【可以多个列】
```sql
CREATE UNIQUE INDEX index_name
ON table_name(index_column_1,index_column_2,...);
```

