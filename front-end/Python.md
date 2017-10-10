# python 语法异同点

## 输入和输出
```python
// 命令行输入 
name = input() # python2.7 使用 name = raw_input('请输入：')，不然会报错 NameError: name 'sd' is not defined

// 如果需要提示输入 
name = input('这是输入提示')

// 命令行输出 
print '输出内容' // 
// 逗号会默认变成空格 print 'name',name // ==> name xxxx
// 格式化输出 
print 'name=%s'%name`,多个数据使用元组, `print 'name=%s,age=%d'%(name,age)
// 浮点数格式化 
print 'sale=%.2f'


```

## 数据类型
* 整形 int
`age = 10`, `sales = int('1212')`
* 浮点数
```python
// 浮点数整除
10//3 ==>3
* 类型转换
* 除数问题
如果直接使用整数相除，会得到 0的情况，那么使用  `from __future__ import division` 解决除数问题

```
* 字符串
* 布尔（ True、False）
* 空值 None

## 数组 list
name = ['a','b','c']
* 数组长度 len(name)
* 取值(使用索引) name[0],name[1],name[2], name[3]不存在的索引会报数组溢出,索引越界
* 倒序 name[-1] == name[0] 
* 查找: 添加 尾追加 .append() ,  插入指定位置 .insert(index,element)
* 删除: 删除最后一个 .pop() ,删除指定位置 pop(i), 索引可以是范围内的正负数
* 遍历 for el in names : 
## 元祖 
一旦初始化，就不能修改，但是引用的内容还是可以修改
sex = ('女','男')
name = ('a','b',sex)// name[2][0] = '狗'
*  单个元组 name(3,)
* set 是不重复的list ,name =  set([1,2,3,4]) 操作 add()存在相同的值，不起作用，删除 remove()
* 迭代遍历
for i, value in enumerate(names)

## 键值对 map
person = { 'name':'a',age:12}// 注意 key 名称必须用 引号包起来，不能跟js 的对象写法一样
* 取值 person['name'],不存在会报错, 
* 取值 person.get('name') 不存在返回None，可以指定不存在时返回的值 person.get('name','怒存在')
* 删除 person.pop('name')
* 检测 key 是否存在 map ==>  'name' in person 返回bool

## 控制语句
* if: , if else : == elseif: ,else:

## 函数
* 定义 
def 函数名 (参数) :
    return 
* 空函数
def kk():
    pass
* lambda 匿名函数, 只能是表达式， lambda 参数:表达式
lambda x:x*x 

## 模块
* 导入模块 from 包 import 模块
from PIL import Image
im = Image.open('...')
* 从指定文件中导入 import mymodule

## 对象 
* 类
```python
class Person():
    def __init__(self,name)
        self.name = name
        self.__sex = '女' # 私有属性

person = Person('abc')
print person.name
```
* 判断对象类型 type
```python
class Person():
	pass
def fn():
    pass
name = 'abc'
age = 12
man = True
p = Person()

print type(name) == str # True
print type(age) == int # True
print type(man)== bool # True
print type(p) == Person # False


# 如果是函数 或者内置模块需要 导入 types 模块进行判断
import types

print type(fn) == types.FunctionType # True
print type(abs)==types.BuiltinFunctionType # True
print type(lambda x: x)==types.LambdaType # True
print type((x for x in range(10)))==types.GeneratorType # True

# 对于继承关系 isinstance(xx,int)
# 获取一个对象的所有属性 dir() 返回一个属性列表串，如dir('abc')
# 配合属性操作 getattr()如果不存在报错,setattr(),hasattr()

```

## 注意点
* 函数解构dir模式只能解构map对象，不能解构 数组 list
```python
def showme(name,age,**kw):
    print name,age, 'other:',kw

infoList = [1,2,3,4]
infoMap = {'sex':1,'city':'shenzhen'}

# 这是错的
showme('xxx',12,**infoList)
# 这是对的
showme('xxx',12,**infoMap)
```
* 函数单个参数引用，类似JS的arguments
```python
def calc(*numbers):
    sum = 0
    for n in numbers:
        sum = sum + n * n
    return sum

# 5
calc(1, 2)
# 0
calc()

# 14 
nums = [1, 2, 3]
calc(nums[0], nums[1], nums[2])

# 14
nums = [1, 2, 3]
calc(*nums)
```
* 只要是 数字 0, 空数组[], None , False, 空字符串 '' 都是 False
```python
0 == False # True
[] == False # True
False == False # True
None == False # True
'' == False # True
```
* 遍历 键值
d = { 'a':1,'b':2 }
for k, v in d.iteritems():

* 列表生成式
n = [2,3,4]
* 实现 nn = 2 + 3 +3 + 3 + 4 +3
nn = [i+3 for i in n]
* 还可以实现 条件判断 和双重循环
nn =  [x * x for x in range(1, 11) if x % 2 == 0]

* 双重循环 得到 ['AX', 'AY', 'AZ', 'BX', 'BY', 'BZ', 'CX', 'CY', 'CZ']
nn = [m + n for m in 'ABC' for n in 'XYZ']


# awesome python

* 解析 html 
1. lxml - 提供的xpath解析器来解析HTML，比Beaultiful Soup快
2. BeautifulSoup – 低效HTML/ XML处理库，纯Python实现
* 通用
1. requests -网络库
注意如果返回数据出现乱码，需要设置 response.encode = 相对应的编码集 如 `response.encoding = 'utf-8'`


# Python 重点
## 版本管理
因为python多版本，并且社区里面基本常见使用的是2.7，并且存在版本不兼容问题。所以需要处理多版本问题，
这个类似于Node的多版本。常见的解决方式是使用`pyenv`[【参考】](http://www.cnblogs.com/linhan/p/4722480.html)进行垫片管理。本地local指定版本，全局不指定
* 使用`pyenv`之后导致`pip`安装的路径总是指向系统的 模块路径，出现 `No module name xxx`
那么需要在pyenv使用的环境中安装 `pip install xx` ,不能用全局的`bash` 安装 `pip`
查看系统的所有Python版本 `pyenv versions`
查看当前命令行的Python版本 `pyenv version`
设置当前工程的Python版本 `pyenv local 版本号` 
重启命令行 :`exec $SHELL`
## 使用`tornado` debug 模式，就可以跟`Node`一样即修改即呈现
```python
application = tornado.web.Application([
        (r"/", MainHandler),
    ],debug=True)
```
* python 的` MySQLdb` 驱动没有支持 python3.0 以上，所以安装
`pip install PyMySQL`
* pip 安装指定版本
`pip install [package name]==version` 如: `pip install cairosvg==1.0.22`
* python 版本判断
```python
import sys
py2 = sys.version_info[0] == 2
py3 = sys.version_info[0] == 3
``

## python 作用域
1. 函数内部可以访问函数外部的变量，函数内部改变函数外部变量的值不会影响函数外部的值，存在作用域链，但是跟JS的原型链不一样
2. python没有块级作用域的说法，for 函数没有产生局部作用域
3. 变量必须是先定义再引用，不存在像JS一样存在作用域提升问题

## python 常见的模块导入姿势
1. 常规导入 `import sys`, `import sys,os` ,`import sys as system`
2. 使用from 语句导入 `from functools import lru_cache`
3. 相对导入, `.` 导入
 文件目录如下：
 -- myproject
        package1
            __init__.py
            module_x.py
            module_y.py
        package2
            __init__.py
        main.py
a. `myproject/package1/__init__.py`
```python
from . import module_x
from . import module_y
```
b. `myproject/package1/module_x.py`
```python
from .module_y import spam as ham

def main():
    ham()
```

c. `myproject/package1/module_y.py`
```python
def spam():
    print('spam ' * 3)
```

d. `myproject/package1/main.py`
```python
import package1
```
4. 本地导入

