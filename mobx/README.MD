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