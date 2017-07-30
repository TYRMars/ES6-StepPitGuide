<h1 align="center">ES6，新语法学习。帮助解析框架。</h1>
<p align="center"><img src="http://www.liuhaihua.cn/wp-content/uploads/2016/02/uuUFNjm.png" /></p>

---
<p align="center"><img src="https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=ae60bcbf7acf3bc7e800caeae93bdd9c/bf096b63f6246b60c55af2c6e1f81a4c510fa228.jpg" /></p>

<p align="center">强烈推荐此书《深入理解ES6》</p>
<p align="center">红宝书大神【美】Nicholas C. Zakas（尼古拉斯·泽卡斯）最新力作</p>

---

## 目录
* [01-01](https://github.com/TYRMars/JSLearn-ES6#01-01) `Let、const命令`
* [01-02](https://github.com/TYRMars/JSLearn-ES6#01-02) `解构解析`
* [01-03](https://github.com/TYRMars/JSLearn-ES6#01-03) `正则扩展`
* [01-04](https://github.com/TYRMars/JSLearn-ES6#01-04) `字符串扩展`
* [01-05](https://github.com/TYRMars/JSLearn-ES6#01-05) `数值扩展`
* [01-06](https://github.com/TYRMars/JSLearn-ES6#01-06) `数组扩展`
* [01-07](https://github.com/TYRMars/JSLearn-ES6#01-07) `函数扩展`
* [01-08](https://github.com/TYRMars/JSLearn-ES6#01-08) `对象扩展`
* [01-09](https://github.com/TYRMars/JSLearn-ES6#01-09) `Symbol`

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

## 01-05
### 数值扩展
* 数值处理新增特性
1. 新增方法
2. 方法调整
#### 知识点
* 进制转换

```JavaScript
//ES5中二进制的表示方法
{
  console.log('b',0b111110111);
  console.log('B',0B111110111);
  console.log(0o767); //503
}
```

* `Number.isFinite` 判断值是否有尽

```JavaScript
{
  console.log('15',Number.isFinite(15)); //true
  console.log('NaN',Number.isFinite(NaN));//false
  console.log('1/0',Number.isFinite('true'/0));//false
}
```

* 判断不是数

```JavaScript
{
  console.log('NaN',Number.isNaN(NaN));//true
  console.log('0',Number.isNaN(0));//false
}
```

* 判断是不是整数

```JavaScript
{
  console.log('25',Number.isInteger(25)); //true
  console.log('25.0',Number.isInteger(25.0)); //true
  console.log('25.1',Number.isInteger(25.1)); //false
  console.log('25',Number.isInteger('25')); //接受参数必须是一个数
}
```

* 判断一个数（-2的53次方到2的53次方）之间，不包含端点

```JavaScript
{
  console.log(Number.MAX_SAFE_INTEGER);//常量，表示数的最大上限9007199254740991
  console.log(Number.MIN_SAFE_INTEGER);//常量，表示数的最低下限-9007199254740991
  console.log(Number.isSafeInteger(10));//true
  console.log(Number.isSafeInteger('a'));//false
}
```

* 判断小数部分，并返回整数部分

```JavaScript
{
  console.log('4.1',Math.trunc(4.1)); //4
  console.log('4.1',Math.trunc(4.9)); //4
}
```

* 判断是正数负数还是0

```JavaScript
{
  console.log('-5',Math.sign(-5)); //-1
  console.log('0',Math.sign(0)); //0
  console.log('5',Math.sign(5)); //1
  console.log('50',Math.sign('50')); //1
  console.log('foo',Math.sign('foo'));//NaN
}
```

* 得出一个数的立方根

```JavaScript
{
  console.log('-1',Math.cbrt(-1)); //-1
  console.log('8',Math.cbrt(8)); //2
}
```

## 01-06
### 数组扩展
* 数组新增特性

| Array.from | Array.of | copyWithin  |
| --------------- |:-------------:| -----------:|
| find\findIndex | fill | entries\keys\values |
| includes |  |  |

* Array.of

```JavaScript
{
  let arr = Array.of(3,4,7,9,11);
  console.log('arr=',arr); //arr= (5) [3, 4, 7, 9, 11]

  let empty = Array.of();//undefined
  console.log('empty',empty);
}
```

* Array.from

```JavaScript
//伪数组或集合转换为真正的数组
{
  //取页面上所有的p元素
  let p = document.querySelectorAll('p');
  let pArr=Array.from(p);
  pArr.forEach(function (item) {
    console.log(item.textContent);
  });
  //映射
  console.log(Array.from([1,3,5],function(item){return item*2}));//[2, 6, 10]
}
```

* fill

```JavaScript
//遍历元素改变值
{
  console.log('fill-7',[1,'a',undefined].fill(7));//fill-7 (3) [7, 7, 7]
  console.log('fill,pos',['a','b','c'].fill(7,1,3));//fill,pos (3) ["a", 7, 7]
}
```

* keys values entries

```JavaScript
//keys
{
  for(let index of ['1','c','ks'].keys()){
    console.log('key',index);
  }
  for(let value of ['1','c','ks'].values()){
    console.log('values',value);
  }
  for(let [index,value] of ['1','c','ks'].entries()){
    console.log('values',index,value);
  }
}
```

* copyWithin

```JavaScript
//copyWithin
{
  console.log([1,2,3,4,5].copyWithin(0,3,4)); //[4, 2, 3, 4, 5]
}
```

* findIndex

```JavaScript
//findIndex
{
  console.log([1,2,3,4,5,6].find(function(item){return item>3}));//4
  console.log([1,2,3,4,5,6].findIndex(function(item){return item>3}));//3
}
```

* includes

```JavaScript
{
  console.log('number',[1,2,NaN].includes(1));//number true
}
```

## 01-07
### 函数扩展
* 函数新增特性

| 参数默认值 | rest参数 | 扩展运算符  |
| --------------- |:-------------:| -----------:|
| 箭头函数 | this绑定 | 尾调用 |

#### 默认值
* 需注意⚠️，在有默认值的参数后，所有参数都必须有默认值

```JavaScript
//参数默认值
{
  function test(x,y = 'world') {
    console.log('默认值',x,y);
  }
  test('hello'); //默认值 hello world
  test('hello','kill');
}
```

* 需注意⚠️作用域问题

```JavaScript
//作用域问题
{
  let x ='test';
  function test2(x,y=x){
    console.log('作用域',x,y);
  }
  test2('kill'); //作用域 kill kill
}
{
  let x ='test';
  function test2(c,y=x){
    console.log('作用域',c,y);
  }
  test2('kill'); //作用域 kill test
}
```

#### rest参数

```JavaScript
//rest参数
{
  function test3(...arg){
    for (let v of arg) {
      console.log('rest',v);
    }
  }
  test3(1,2,3,4,'a');//rest 1 rest 2 rest 3 rest 4 rest a
}

{
  console.log(...[1,2,4]);//1,2,4
  console.log('a',...[1,2,4]);//1,2,4
}
```

#### =>函数
* `let arrow = v => v*2;`
* `v`是参数，=>，`V*2`返回值
* 需要注意的箭头函数的`this`绑定
```JavaScript
{
  let arrow = v => v*2;
  let arrow2 = () => 5;
  console.log(arrow(3));//6
  console.log(arrow2());//5
}
```

#### 尾调用
* 嵌套别的函数，一个函数依赖另一个函数，建议使用尾调用，提升性能
```JavaScript
{
  function tail(x) {
    console.log('tail',x);
  }
  function fx(x){
      return tail(x);
  }
  fx(123);//tail 123
}
```

## 01-08
### 对象扩展
* 对象新增特性`Object`

| 简洁表示法 | 属性表示法 |
| --------------- |:-------------:|
| 扩展运算符 | Object新增方法 |

#### 简洁表示法

```JavaScript
{
  //简洁表示法
  let o=1;
  let k=2;
  let es5={
    o:o,
    k:k
  };
  let es6={
    o,
    k
  };
  console.log(es5,es6);//{o: 1, k: 2} {o: 1, k: 2}

  let es5_method = {
    hello:function () {
      console.log('hello');
    }
  };
  let es6_method = {
    hello(){
      console.log('hello');
    }
  }
  console.log(es5_method,es6_method);//{hello: ƒ} {hello: ƒ}
}
```

#### 属性表达式

```JavaScript
{
  let a = 'b';
  let es5_obj = {
    a:'c',
    b:'c'
  };
  let es6_obj = {
    [a]:'c'
  };

  console.log(es5_obj,es6_obj);//{a: "c", b: "c"} {b: "c"}
}
```

#### 新增API

* `Object.is()`

1. 虽然两个是空数组，但是两个数组地址不同，所以为false
2. `Object.is()` 和 `===` 用法一样

```JavaScript
{
  console.log('字符串',Object.is('abc','abc'),'abc'==='abc'); //字符串 true true
  console.log('数组',Object.is([],[]),[]===[]);//数组 false false
  //虽然两个是空数组，但是两个数组地址不同，所以为false
  //Object.is() 和 === 用法一样
}
```

* `Object.assign()`

1. 拷贝属性有限制，分为浅复制和深复制。引用类型只是修改引用地址，而不是拷贝所有的值
2. 这个方法拷贝的是只有自身对象的属性，如果对象有继承，那它不会拷贝继承属性。同时也不能拷贝对象中不可枚举的属性

```JavaScript
console.log('拷贝',Object.assign({a:'a'},{b:'b'}));//浅拷贝
```

* `Object.entries()`

```JavaScript
let test = {k:123,o:456};
for (let [key,value] of Object.entries(test)) {
  console.log([key,value]); // ["k", 123] ["o", 456]
}
```

* ES2017提案

```JavaScript
{
  //扩展运算符
  let {a,b,...c}={a:'test',b:'kill',c:'ddd',d:'ccc'};
  c = {
    c:'ddd',
    d:'ccc'
  }
}
```

## 01-09
### Symbol

* `Symbol`的概念
  * 这种数据类型提供独一无二的值，如：在JS中声明数据类型`number = 5` ，还可以通过一个`变量b`生成一个`number = 5`。但是用Symbol的值生成的值`不重复不相等`，用`Symbol`生成一个`变量a`和用`Symbol`生成的`变量b`都不相等

* `Symbol`的作用
  * 特性

* `Symbol`的声明

```JavaScript
{
  //声明
  let a1=Symbol();
  let a2=Symbol();
  console.log(a1===a2);//false
  let a3=Symbol.for('a3');
  let a4=Symbol.for('a3');
  console.log(a3===a4);//true
}
```

* 获取`Symbol`属性值的方法
```JavaScript
{
  let a1=Symbol.for('abc');
  let obj = {
    [a1]:'123',
    'abc':345,
    'c':456
  }
  console.log('obj',obj);//{abc: 345, c: 456, Symbol(abc): "123"}

  for (let [key,value] of Object.entries(obj)) {
    console.log('let of',key,value);//let of abc 345 let of c 456
  }

  //Object.getOwnPropertySymbols(obj)
  Object.getOwnPropertySymbols(obj).forEach(function (item) {
    console.log(obj[item]);// 123
  })

  Reflect.ownKeys(obj).forEach(function (item) {
    console.log('1',obj[item]);// 345 456 123
  })
}

```



---

## 扩展知识

### JS作用域
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
