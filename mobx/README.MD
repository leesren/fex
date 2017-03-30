# 学习mobx.js 参考资料

## PPT和文档 
* [典型的例子 react-native-with-mobx](http://slides.com/windy/react-native-with-mobx#/1)
* [Common pitfalls & best practices](https://mobx.js.org/best/pitfalls.html)
* [MobX API 英文](https://mobx.js.org/intro/overview.html)

## react-native 相关的工程

* [react-native 工程模板](https://github.com/80percent/mobx-react-native-template)
* [使用 MobX 开发 React Native 应用](http://www.zcfy.cc/article/react-native-with-mobx-1052.html)
* [从redux架构重构到mobx细节点](https://www.robinwieruch.de/mobx-react/) 
* [mobx官方demo例子](https://github.com/mobxjs/mobx-examples)


## react-native mobx 工程经验
* 1、 react-native 初始化基本工程后 需要安装几个依赖文件,主要是解决 mobx 使用 es7 的 decortor
```bash
npm install -i --save transform-decorators-legacy transform-class-properties
```
2、修改 .babelrc 文件  ，添加如下代码

```json
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
3. 建立 mobx 的store， `counter.js`
```javascript
'use strict';

import { observable } from 'mobx';

const counter = observable({
    counter: 0,
    total: 0
});
counter.increment = function () {
    this.counter++;
};
counter.decrement = function () {
    this.counter--;
};
counter.incrementAsync = function () {
    setTimeout(() => {
        this.counter++;
    }, 1000);
};
module.exports = counter;
```

4、 在组件中使用 `counter.js` 的数据 和方法
```javascript
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Button from 'apsl-react-native-button';
import { observer } from 'mobx-react/native';

@observer
export default class PageOne extends Component {// redux mobx 
    render() {
        var stores = this.props.stores;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native Reactive!
                </Text>
                <Text>Counter:{stores.counter.counter}</Text>
                <Text>Total clicks: </Text>
                <Button style={{ backgroundColor: 'blue' }} textStyle={{ fontSize: 15,color: "white" }} onPress={ ()=> stores.counter.increment() }>加法</Button>
                <Button style={{ backgroundColor: 'red' }} textStyle={{ fontSize: 15, color: "white" }} onPress={ ()=> stores.counter.decrement()}>减法</Button>
            </View>
        )
    }
}
```
5、 注入 `store`
```
import counter from './store/counter';
const stores = { counter }



export default class pure extends Component {
    render() {
        return (
            <Router stores={stores} key='modal'>
                <Scene key="root">

                    <Scene key='tabbar' tabs={true} style={{ backgroundColor: '#eeeeee' }}>
                         
                        <Scene key='tab2' component={Home} title='消息' icon={TabbarItem} idx={1}
                            navigationBarStyle={{ backgroundColor: 'red' }} titleStyle={{ color: 'white' }} />
                        <Scene key='tab3' component={Home} title='发现' icon={TabbarItem} idx={2}
                            titleStyle={{ color: 'blue' }} />
                        <Scene key='tab4' component={Home} title='我的' icon={TabbarItem} idx={3}
                            onLeft={() => alert("Left button!")} leftTitle="Left"
                            onRight={() => alert("Right button")}
                            rightTitle="Right" />

                    </Scene>
                </Scene>
            </Router>
        );
    }
}
```

6. react-native 版本 `0.39.0`执行运行 ios的时候 出现 `Unhandled JS Exception: SyntaxError` 提示
    * 解决 删除 `node_modules` 下的 `use strict;`
    [参考](http://stackoverflow.com/questions/41021827/reactnative-unhandled-js-exception-syntaxerror/41399322)

7. xcode 打包到真机，初夏can't find disk image, 是因为xcode版本和iPhone的版本不对应，要么选择升级xcode或者找合适的iPhone版本

8. 注意react-native 0.40.0的版本更新说明，有很大的API变化，注意！！！重要的事说三遍 [参考](http://www.devio.org/2017/01/17/React-Native%E5%8D%87%E7%BA%A7%E6%8C%87%E5%8D%97-v0.40+%E5%8D%87%E7%BA%A7%E9%80%82%E9%85%8D%E7%BB%8F%E9%AA%8C%E4%B8%8E%E5%BF%83%E5%BE%97/)
最权威的地方是下面[官网说明](http://reactnative.cn/post/3277)

9. react-native-video 这个库有很多的问题，因为不能匹配RN 0.40.0 或者以上，需要降级。但是还是有很多的issue没有close掉。
选择的是一个fork版本的react-native-video的库 [地址](https://github.com/younseunghyun/react-native-video/tree/0.38-nill)
使用过程中，需要先安装 `react-native-video`,然后删除 `react-native-video`的所有内容,最后把下载下来的库内容文件复制到 `react-native-video `
文件夹下面

10. `react-native-router-flux` 顶部状态栏有1像素的白边，处理方式是在源码上修改`top:-1`, 
进入 `node_modules > react-native-router-flux > src > NavBar.js ` 67 行 把 ` top:0 ` 改成 ` top:-1 `
