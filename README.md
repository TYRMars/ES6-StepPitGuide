<h1 align="center">ES6，新语法学习。帮助解析框架。</h1>
<p align="center"><img src="http://www.liuhaihua.cn/wp-content/uploads/2016/02/uuUFNjm.png" /></p>

---


## 目录
* [01-01](https://github.com/TYRMars/JSLearn-ES6#01-01) `Let、const命令`
* [01-02](https://github.com/TYRMars/JSLearn-ES6#01-02) `解构解析`
* [01-03](https://github.com/TYRMars/JSLearn-ES6#01-03) `正则扩展`

---

## 01-01
### Let、const命令
* 作用域的概念：ES6的块级作用域
* 使用let和const


#### let

```JavaScript
function test() {
  let a = 1; //var a = 1;
  console.log(a);
}
test();
```

* let主要是使用在块级作用域

```JavaScript
function test() {
  for (let i = 0; i < 3; i++) {//一个大括号里，就是一个块作用域
    console.log(i);
  }
  console.log(i); //这里会报错，for循环中就是一个块级作用域
}

test();
```
* ES6强制开启严格模式`use strict`
    * 变量未被声明，会报引用错误❌

```JavaScript
function test() {
  let a = 1;
  let a = 2;
}
test();
```
* let不能重复声明，否则会报错

#### const
```JavaScript
function last() {
  const PI = 3.1415926;
  console.log(PI);
}
last();
```
* const作为常量的定义，常量的含义是无法修改的
    * 如果对PI进行修改PI会报错PI：read-only
    * 声明const必须进行赋值

```JavaScript
function last() {
  const k = {
    a:1
  }
  k.a = 2;
  k.b = 3;
  console.log(k);
}
last();
```
* 当定义对象时（引用类型），`const`定义的对象存储的指针，指针无法改变，但是对象是可以改变的


## 01-02
### 解析解构
* 解析解构的分类

| 数组解构赋值      | 对象解构赋值    | 字符解构赋值  |
| --------------- |:-------------:| -----------:|
| 布尔类型解构赋值   | 函数参数解构赋值 | 数值解构赋值  |

* JS对象的数据类型
* 数组与对象

#### 数组类型的解构赋值

```JavaScript
//ES6
{
  let a,b,rest;
  [a,b]=[1,2]
  console.log(a,b);
}
//ES5
{
  var a = void 0,
      b = void 0,
      test = void 0;
    a = 1;
    b = 2;
    console.log(a,b);
}
//ES6
{
  let a,b,rest;
  [a,b,...rest]=[1,2,3,4,5,6];//a=1,b=2,rest = [3,4,5,6]
  console.log(a,b,rest);
}
```
#### 对象解构赋值

```JavaScript
//ES6
{
  let a,b;
  ({a,b}={a:1,b:2})
  console.log(a,b);//1,2
}
```
#### 解构赋值

```JavaScript
{
  let a,b,c,rest;
  [a,b,c=3]=[1,2];
  console.log(a,b,c);//1,2,3
}
```

* 如果解构赋值没有成功配对,c变量为undefind，只声明无赋值

```JavaScript
{
  let a,b,c,rest;
  [a,b,c]=[1,2];
  console.log(a,b,c);//1,2,undefind
}
```

* 数组解构赋值-变量替换（无需使用中间变量）

```JavaScript
//变量交换
{
  let a = 1;
  let b = 2;
  [a,b] = [b,a];
  console.log(a,b); //2,1
}
```

* 数组解构赋值

```JavaScript
//先用一个变量接收函数运行的结果，再返回0,1位置
{
  function f(){
    return [1,2];
  }
  let a,b;
  [a,b] = f();
  console.log(a,b);
}
{
  function f() {
    return [1,2,3,4,5];
  }
  let a,b,c;
  [a,,,b]=f();
  console.log(a,b); //1,4
}
{
  function f() {
    return [1,2,3,4,5];
  }
  let a,b,c;
  [a,b...]=f();
  console.log(a,b); //1,[2,3,4,5]
}
{
  function f() {
    return [1,2,3,4,5];
  }
  let a,b,c;
  [a,,b...]=f();
  console.log(a,b); //1,[3,4,5]
}
```

* 对象解构赋值

```JavaScript
{
  let o = {p:42,q:true};
  let {p,q}=o;
  console.log(p,q);
}
```

---


#### JS作用域
```JavaScript
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state ={
          initDone: false
        }
    }
    render() {
        return (
            <div>
                {
                  this.state.initDone
                  ? this.props.children
                  : <div>努力加载中！！！！</div>
                }
            </div>
        )
    }
    componentDidMount(){
      setTimeout(() => {
        this.setState({
          initDone:true
        })
      },1000)
    }
}

export default App
```
* 错误的使用

```JavaScript
//ES5
console.log(this); //App对象
setTimeout(function () {
  console.log(this); //Window对象
  this.setState({
    initDone:true
  })
},1000)
```
#### 解决方法
* ES5 `var`

```JavaScript
//ES5
console.log(this); //App对象
var that = this;
setTimeout(function () {
  console.log(that); //App对象
  // this.setState({
  //   initDone:true
  // })
},1000)
```

* ES6 `=>`

```JavaScript
//ES6
console.log(this); //App对象
setTimeout(() => {
  console.log(this); //App对象
        this.setState({
          initDone:true

        })
      },1000)
```

---
