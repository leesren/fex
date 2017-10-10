# mobx 工程要点
* 需要支持 ES6 `decorators` 的修饰符，需要安装 `babel` 插件
```shell

 yarn add babel-plugin-transform-decorators babel-plugin-transform-decorators-legacy

```
然后修改 `.babelrc` 文件
```
{
    "presets": [
        "react-native"
    ],
    "plugins": [
        "transform-decorators-legacy",
        "transform-class-properties"
    ]
}

```
* IOS http 安全域限制
出现提示  `The resource could not be loaded because the App Transport Security policy requires the use of a secure connection.`
在 `info > customer iOS target properties` 的  `App Transport Security` 选择 `Allow Arbitary Loads ` 为 `YES`
* IOS使用照相机和麦克风，需要在plist.info 设置使用私有的API
```xml
<key>NSCameraUsageDescription</key>
<string>Your message to user when the camera is accessed for the first time</string>

<!-- Include this only if you are planning to use the camera roll -->
<key>NSPhotoLibraryUsageDescription</key>
<string>Your message to user when the photo library is accessed for the first time</string>

<!-- Include this only if you are planning to use the microphone for video recording -->
<key>NSMicrophoneUsageDescription</key>
<string>Your message to user when the microsphone is accessed for the first time</string>
```

* react-native-wechat 包导入问题

1. yarn add react-native-wechat
2. 参照 配置
3. 在项目的 Build Phases > Link Binary With Libaries 添加

```bash 
libRCTWeChat.a
SystemConfiguration.framework
CoreTelephony.framework
libsqlite3.0
libc++
libz

```

# react-native
* IOS 键盘遮挡输入框问题
1. [React Native 键盘遮挡解决方案](https://github.com/LiveBOS/blog/issues/1)
2. [官方的方法](http://facebook.github.io/react-native/docs/keyboardavoidingview.html)