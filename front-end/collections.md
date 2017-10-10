# 常见问题
* [开发安全的 API 所需要核对的清单](https://github.com/shieldfy/API-Security-Checklist/blob/master/README-zh.md)
* [项目规范](https://github.com/wearehive/project-guidelines/blob/master/README-zh.md)
* 权限管理 [JSON Web Token（JWT）](http://blog.leapoahead.com/2015/09/06/understanding-jwt/)
# 效率工具
## vscode 

常见插件
* AutoFileName 自动补全路径名称
* Ducument This
* Quakka.js 实时测试JavaScript代码 [详见](https://quokkajs.com/docs/)
* Beautify css/sass 等
* 常见的 snippets 各种语言的智能提示插件
* 路径提示 Path intellisense
* 正则表达式预览 Regex previewer

## 测试
* [tape](https://github.com/substack/tape) ，[内容详见](https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4)
* VS Code - Debugger for Chrome 首先必须要启动一个服务器，这样chrome才能代理，然后进行断点调试
* 服务器启用压缩功能 如 gzip、deflate

## why full stack Javascript 
1. don't depend on anyone, you can do anything.
2. join a cool company/project.
3. be more productive 
4. get a pay raise 
5. get more fun out of coding

some technology you should konow.

### NodeJS
Node.js basic
* Node.js Global
* Node.js Process
* Node.js Core Modules
* Node.js Command line interface arguments
* Node.js test (unit test -- mocha, jest, tape, chai, should)
* Node.js debug (new chrome debug)
* Node.js File system
* Node.js Sheel (REPL)
* Node.js application matain (生产部署，日志，session)

### Koa2.js / Express.js
web服务框架
* config 
* router
* common  middleware
* template engine
* RESTfull API
* auth (JWT JSON Web Tokens)

Frame API
* request, response
* error handler
* scaling
* ngnix proxy

### MongoDB
mongodb basic
* what is nosql ，and the differences bewteen sql and nosql, the more you know, the better you do.
* build database model
* install mongodb and config mongodb

curl -H "Authorization token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE1MDEyMjEyMTl9.97i6ChqwJM83MYnvulQ_grVHSPFyAbTt8ODMLpyILME" localhost:4000/api
