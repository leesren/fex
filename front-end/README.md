# 前端问题 wiki
## http 相关
* [彻底弄懂 Http 缓存机制 - 基于缓存策略三要素分解法](https://zhuanlan.zhihu.com/p/24467558)
* [前端缓存策略与基于Webpack的静态资源版本管理](https://zhuanlan.zhihu.com/p/24954527)
* [浏览器缓存知识小结及应用](http://web.jobbole.com/84888/)
* [当点击Google一下，发生了什么](https://github.com/skyline75489/what-happens-when-zh_CN)
## 300ms 延迟
* [移动端click延迟及zepto的穿透现象](https://github.com/mattt/MsgPackSerialization/wiki/%E7%A7%BB%E5%8A%A8%E7%AB%AFclick%E5%BB%B6%E8%BF%9F%E5%8F%8Azepto%E7%9A%84%E7%A9%BF%E9%80%8F%E7%8E%B0%E8%B1%A1)
* [zepto的Tap击穿问题](https://zhuanlan.zhihu.com/p/25280160)

# CSS
* [网易和淘宝移动WEB适配方案再分析](https://zhuanlan.zhihu.com/p/25216275)
* [ CSS Grid布局这样玩 ](https://www.w3cplus.com/css3/playing-with-css-grid-layout.html)

# 性能优化
* [重绘，回流和合成，了解基本浏览器绘制帮你优化页面性能](https://zhuanlan.zhihu.com/p/23428399)
* [加快页面打开速度](https://zhuanlan.zhihu.com/p/25718817)
* [避免页面卡顿](https://zhuanlan.zhihu.com/p/25166666)
* 谷歌开发者
# 常用工具
* [在线动画工具](http://animista.net/)

# JS 黑魔法
* [正则表达式中的lastIndex以及预查](https://zhuanlan.zhihu.com/p/25793949)
* [关于Object的getter和setter](https://zhuanlan.zhihu.com/p/25672454)
* [常见错误,JS 坑](https://zhuanlan.zhihu.com/p/25685164)

# 组件
* [魔方组件](http://mofang.xiaojukeji.com/webapp.html#/)

# 工程化
* [公司级组件库以及MIS系统的技术实践分享](http://www.infoq.com/cn/articles/company-level-component-library-and-mis-systems)
* [脚本错误量极致优化-监控上报与Script error](https://github.com/joeyguo/blog/issues/13)
* [脚本错误量极致优化-让脚本错误一目了然](https://github.com/joeyguo/blog/issues/14)
* [构建可靠的前端异常监控服务-采集篇](http://jdc.jd.com/archives/2175)

# 视频播放 
* [视频H5のVideo标签在微信里的坑和技巧](https://aotu.io/notes/2017/01/11/mobile-video/)
* [HTML 5 视频直播](http://bugly.qq.com/bbs/forum.php?mod=viewthread&tid=1277)

# 输入问题
* [移动端输入框 tabbar 布局](http://www.alloyteam.com/2017/03/moves-the-input-box-fill-series-a/)
* [input type="text" 输入触发onchange](http://www.tuicool.com/articles/uAVvqaI)
* [图片上传前，前端预览图片,上传前预览，兼容IE7、8、9、10、11，Firefox，Chrome]
在IE中能够很方便的实现本地网页的图片预览，IE中的<input type="file" id="file_upload">中的File对象中的value属性，存储的是要上传的文件的完整路径，在IE中只需要将这个完整路径作为一个Image对象的src属性（可以加上file:///协议，效果一样），就能实现在这个Image对象中对这个上传的图片进行预览,对IE7、8、9、10、11。

Firefox和Chrome的本地图片预览`var url = window.URL.createObjectURL(document.getElementById(sourceId).files[0])`,这种使用Firefox File对象的getAsDataURL的方式，已经在Firefox 7.0以后弃用

在Chrome中，window.URL和window.webkitURL都存在
在Firefox中，仅Window.URL存在
在IE11（Edge），10中仅window.URL存在
在IE7、8、9中不存在window.URL
在IE中能通过FileObject 的value 属性获取文件全路径
在Chrome中无法获取FileObject的全路径，得到的是一个假路径
在Firefox中根本获取不到路径，得到的是一个文件名
在IE7、8、9中无法获取到FileObject的files属性

例子如下：
`<input type="file" onChange={this.fileupload.bind(this)}/>`
```js
fileupload(event) {
    const files = event.target.files;
    /**
     * 
     * chrome 存在 window.URL 和 window.webkitURL
     * edge,ie 10 ,firfox 存在 window.URL,高版本的edge 存在两者都存在
     */
    const windowURL = window.URL || window["webkitURL"];
    let dataURL;
    if (files[0]) {
      dataURL = windowURL.createObjectURL(files[0]);
      this.imgref.src = dataURL;
    } else {
      dataURL = event.target.value;
      // 两个坑:
      // 1、在设置filter属性时，元素必须已经存在在DOM树中，动态创建的Node，也需要在设置属性前加入到DOM中，先设置属性在加入，无效；
      // 2、src属性需要像下面的方式添加，上面的两种方式添加，无效；
      this.imgref.style.filter =
        "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
      this.imgref.filters.item(
        "DXImageTransform.Microsoft.AlphaImageLoader"
      ).src = dataURL;
    }
  }
```
# SVG 
* [使用 Snap.svg 制作动画](https://aotu.io/notes/2017/01/22/snapsvg/)

# webpack 

* [今天，你升级Webpack2了吗，Webpack2新特性](http://www.aliued.com/?p=4060)

# 开发调试 

* [chrome 调试 ios webview ](http://www.jianshu.com/p/19c18c924f91) 注意需要xcode 版本大于8.0
* xcode 打开 webview或者发送 http请求出现错误，先要设置 安全域
* chrome 常用技巧
1. 直接编辑页面 
在控制台里面输入 `document.designMode = "on"`,即可操作dom内容
2. 复制 http 请求
对于http请求，右键` copy` => `Copy as cURL` 然后在命令行测试 `curl` 命令
3. 清空控制台
mac快捷键： `commd + k `
* [移动端真机调试指南](https://aotu.io/notes/2017/02/24/Mobile-debug/)
1. safari 开发者调试 ios 设备或者ios模拟器
2. Android webview调试 chrome://inspect/#devices， 需要android 4.4 以上才行，如果webview不可调试,需要设置 webview成可调式模式
`WebView.setWebContentsDebuggingEnabled(true);`，如果出现一值在转圈圈，需要合理翻墙
3. [sentry.io](sentry.io) 线上错误日志收集平台

# 解决transition动画与display冲突的几种方法
[参考](http://www.cnblogs.com/ihardcoder/p/3859026.html)

涉及到的原理是：元素要动画起作用，浏览器必须知道元素具体维度，就必须对这个元素重排(reflow),
引起重排有很多方法，比如获取元素的size、clientHeight等，这样就会触发浏览器更新这个元素，引起重排。最后进行动画[参考](http://matheusazzi.com/animating-from-display-none-with-css-and-callbacks/)
CSS3动画对于`display:none` 的元素不起作用，对于`height:auto`和 `height:0`也不起作用，处理方式是：

1. 使用 `position:absolute; visibility:hidden` 替代
2. 使用 `setTimeout` 或者 `requestanimationframe`, 顺序执行UI动画
## 从` display:none` ==> `display:block`
```javascript
      $foo.style.display = 'block'; 
      var clientHeight = $foo.clientHeight;// force Reflow   
      $foo.classList.add('animation')
```
## 从 `display:block` ==> `display:none`
1. 等待动画完成，然后隐藏 `display:none`
2. 如果不需要移除元素（`display:none`）,可以使用 `opacity:0`、`visibility:hidden` 进行处理，但是元素依然占据文档空间

## 前端缓存策略与基于Webpack的静态资源版本管理,Webpack中hash与chunkhash的区别，以及js与css的hash指纹解耦方案
[参考](http://www.cnblogs.com/ihardcoder/p/5623411.html)


# SVG
* [Techniques for Creating Textured Text](https://tympanus.net/codrops/2013/12/02/techniques-for-creating-textured-text/)
* [svg 路径动画](http://www.zhangxinxu.com/wordpress/2014/04/animateion-line-drawing-svg-path-%E5%8A%A8%E7%94%BB-%E8%B7%AF%E5%BE%84/)
* [svg线条动画库](https://github.com/maxwellito/vivus)
* [线条动画demo](http://up.qq.com/act/a20170329upm/index.htm?acctype=wx&appid=wxa48b72952218d214&code=001Eo9WF1jnFU203LRUF1YQmWF1Eo9WY&state=STATE)
* [svg视频遮罩](http://codepen.io/dudleystorey/pen/QvvEYQ)
* [卡片环绕分布 CSS3 3D变换](https://css-tricks.com/solving-last-item-problem-circular-distribution-partially-overlapping-items/)
# WebGL
* [3D粒子效果在网页端实现分享](http://tgideas.qq.com/webplat/info/news_version3/804/7104/7106/m5723/201704/577405.shtml)

# 动画
* [App动效原理和应用设计](http://jdc.jd.com/archives/2295)


# 数据可视化
* [美丽的数据——数据可视化与信息可视化浅谈](http://jdc.jd.com/archives/1333)

# 全景图
* [CSS 3D Panorama – 淘宝造物节技术剖析](http://jdc.jd.com/archives/1982)
* [krpano.js 为全景而生，低级浏览器则回退到 Flash](https://krpano.com/docu/tutorials/quickstart/?from=groupmessage&isappinstalled=0#top)

## webpack
* `webpack` 编译 `.scss` 文件 报  `Module build failed: Error: ENOENT: no such file or directory`  是因为 `yarn` 添加 `node-sass` 的时候未进行编译所以需要 ` npm rebuild node-sass `
* 配置 `sass` 和 `autoprefixer`，需要 安装 `sass-loader`、`autoprefixer`、`node-sass`【需要 `npm rebuild node-sass`】、`postcss-loader`
配置如下：
1. `package.json` 添加 `postcss-loader` 的配置，也可以直接在 `postcss.config.js`，`.postcssrc` 配置，但是不是很方便
```json
"postcss": {
    "map": false,
    "plugins": {
      "autoprefixer": {
        "browserslist": ["> 0.1%","last 2 versions"]
      }
    }
  }
```
2. 配置webpack 的 sass-loader 和 postcss-loader, 因为使用的 webpack 2 所以配置方式是需要在 plugins 里面添加的，不能再配置文件上面
直接写 `post:function(){ return require('autoprefixer')}`
```js
...
module:{
      rules:[
            {
                  test: /\.scss$/,
                  loader: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: [
                              { loader: "css-loader" },
                              {loader: 'postcss-loader'},
                              { loader: "sass-loader" }
                        ]
                  })
            },
      ]
},
plugins: [
        new webpack.LoaderOptionsPlugin({// webpack 2 的写法
            options: {
                postcss: [
                    require('autoprefixer')//调用autoprefixer插件
                ]
            }
        })
]
...    
```
* webpack 处理 `.html`文件中的 img src 情况,这个需要 `html-loader` 来处理 URL问题, 同时还需要安装 `file-loader`
```js
{
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      query: {
            limit: 10000,
            name: 'asserts/image/[name].[hash:7].[ext]'
      }
},
```

## 业务
 excel 操作
 * [excel 导出 ](http://sheetjs.com/demos/modify.html)
 * [excel 导入](xlsx)
