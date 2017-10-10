nginx[engine x] 是个高性能的`HTTP`和`反向代理`服务器，也是一个邮件`代理服务器`,由俄罗斯人开发。它以
稳定性、功能丰富、示例配置文件和低功耗而闻名。目前很多大网站都已经部署陆Nginx。

## document
### install
* mac 
```shell
# brew 搜索
brew search nginx
# brew install
brew install nginx
# brew uninstall 
brew uninstall nginx
# 查看安装信息
brew info nginx 【sudo】
# 查看已经安装的软件
brew list
# 启动 nginx
nginx [sudo] # 然后浏览器打开 http://localhost:8080/
# stop nginx ,
# if apache is running must also stop 
# sudo apachectl stop
nginx -s stop [sudo]
```
* config [参考](https://coderwall.com/p/dgwwuq/installing-nginx-in-mac-os-x-maverick-with-homebrew)
nginx 的安装目录在 
[mac]:`/usr/local/etc/nginx`,
配置文件 `/usr/local/etc/nginx/nginx.conf`
nginx 静态目录文件指向的是:
`usr/local/Cellar/nginx/1.2.3/html`