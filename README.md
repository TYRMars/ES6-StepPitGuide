<h1 align="center">ES6，新语法学习。帮助解析框架。</h1>
<p align="center"><img src="http://www.liuhaihua.cn/wp-content/uploads/2016/02/uuUFNjm.png" /></p>

---

## 目录
* [01-01](https://github.com/TYRMars/JSLearn-ES6#01-01) `Let、const命令`
* [01-02](https://github.com/TYRMars/JSLearn-ES6#01-02) `解构解析`
* [01-03](https://github.com/TYRMars/JSLearn-ES6#01-03) `正则扩展`
* [01-04](https://github.com/TYRMars/JSLearn-ES6#01-04) `字符串扩展`

## need
* `npm install gulp gulp-if gulp-concat webpack webpack-stream vinyl-named gulp-livereload gulp-plumber gulp-uglify gulp-util yargs --save-dev`

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

```JavaScript
{
  let {a=10,b=5}={a:3};
  console.log(a,b);
}
```

```JavaScript
{
  let metaData={
    title:'abc',
    test:[{
      title:'test',
      desc:'description'
    }]
  }
  let {title:esTitle,test:[{title:cnTitle}]}=metaData;
  console.log(esTitle,cnTitle);
}
```

## 01-03
### 正则扩展
* 正则新增特性

| 构造函数的变化      | 正则方法的扩展    | u修饰符  |
| --------------- |:-------------:| -----------:|
| y修饰符   | s修饰符 | 。。。。  |

```JavaScript
{
  //ES5
  let regex = new RegExp('xyz','i');
  let regex2 = new RegExp(/xyz/i);
  console.log(regex.test('xyz123'),regex2.test('xyz123'));//true true
  //ES6
  let regex3 = new RegExp(/xyz/ig,'i');
  console.log(regex3.flags);//i flags获取对象修饰符的属性
}
```

* Y修饰符

```JavaScript
{
  let s = 'bbb_bb_b';
  let a1=/b+/g;
  let a2=/b+/y;
  console.log('one',a1.exec(s),a2.exec(s));
  console.log('two',a1.exec(s),a2.exec(s));
  //g可以匹配到bb，y没有匹配成功，g修饰符是从上一次匹配的位置继续寻找，y匹配了第一个紧跟着下一个字符必须还能匹配到
}
```

* U修饰符

```JavaScript
{
  console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A')); //true 没有u会当成两个字符
  console.log('u-2',/^\uD83D/u.test('\uD83D\uDC2A'));//false u会当成1个字符

  console.log(/\u{61}/.test('a')); //false
  console.log(/\u{61}/u.test('a'));//true 如果不加u修饰符

  console.log('\u{20BB7}');

  let s = '𠮷';

  console.log('u',/^.$/.test(s));    //false
  console.log('u-2',/^.$/u.test(s)); //true (如果字符串中有的字符大于两个字节，一定要加上U字符)使用.

  console.log('test',/𠮷{2}/.test('𠮷𠮷'));   //false
  console.log('test-2',/𠮷{2}/u.test('𠮷𠮷'));//true

}
```

* S修饰符的作用

## 01-04
### 字符串扩展
* 字符串新增特性

| Unicode表示法 | 遍历接口    |
| --------------- |:-------------:|
| 模版字符串 | 新增方法（10种） |

* `npm install babel-polyfill --save-dev`

#### codePointAt
```JavaScript

//ES5
{
  let s='𠮷';
  console.log('𠮷',s.length);   //𠮷 2
  console.log('0',s.charAt(0)); //0 � 乱码
  console.log('1',s.charAt(1)); //1 �
  console.log('at0',s.charCodeAt(0)); //at0 55362
  console.log('at1',s.charCodeAt(1)); //at1 57271
}

//ES6
{
  let s='𠮷a';
  console.log('length',s.length);  //𠮷a 3
  console.log('code0',s.codePointAt(0)); //code0 134071
  console.log('code0',s.codePointAt(0).toString(16)); //code0 20bb7
  console.log('code0',s.codePointAt(1)); //57271
  console.log('code0',s.codePointAt(2)); //97
}

```

#### fromCharPoint
* 对比`ES5`中`fromCharCode`和`ES6`中`fromCodePoint`的用法
* 识别大于两个字符的Unicode字符码

```JavaScript
{
  console.log(String.fromCharCode("0x20bb7")); //ஷ 乱码
  console.log(String.fromCodePoint("0x20bb7"));//𠮷
}
```

#### ES6

```JavaScript

{
  let str = '\u{20bb7}abc';
  for(let i = 0;i<str.length;i++){
    console.log('es5',str[i]);
  }
  for (let code of str) {
    console.log('es6',code);
  }
// VM82:4 es5 �
// VM82:4 es5 �
// VM82:4 es5 a
// VM82:4 es5 b
// VM82:4 es5 c
// VM82:7 es6 𠮷
// VM82:7 es6 a
// VM82:7 es6 b
// VM82:7 es6 c
}

{
  let str = "string";
  console.log('include',str.includes("c")); //false
  console.log('start',str.startsWith('str')); //true 以什么开始
  console.log('end',str.endsWith('ng')); //true 以什么结束
}

{
  let str = "abc";
  console.log(str.repeat(2)); //abcabc 字符串复制
}
```

* 模版字符串

```JavaScript
//模版字符串
{
  let name = "list";
  let info = "hello world";
  let m = `i am ${name},${info}`
  console.log(m); //i am list,hello world
}
```

* `ES7`中

```JavaScript
//ES7草案
{
  console.log('1'.padStart(2,'0'));//01
  console.log('1'.padEnd(2,'0'));//10
}
```

* 标签模版
1. 过滤HTMl字符串，防止XSS攻击，进行这个处理
2. 多语言转换使用

```JavaScript
//标签模版
{
  let user ={
    name:'list',
    info:'hello world'
  };
  abc`i am ${user.name} ${user.info}`;
  console.log(abc`i am ${user.name} ${user.info}`);//i am , ,listhello world
  function abc(s,v1,v2){
    console.log(s,v1,v2); //["i am ", " ", "", raw: Array(3)] "list" "hello world"
    return s+v1+v2;
  }
}
```

* `String.raw`

```JavaScript
{
  console.log(String.raw`Hi\n${1+2}`); //Hi\n3
  console.log(`Hi\n${1+2}`);
  //Hi
  //3
}
```

---


## JS作用域
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
