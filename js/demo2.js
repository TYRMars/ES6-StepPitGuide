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

//ES6
{
  let a,b;
  ({a,b}={a:1,b:2})
  console.log(a,b);//1,2
}

//ES6
{
  let a,b,c,rest;
  [a,b,c=3]=[1,2];
  console.log(a,b,c);//1,2,3
}

//变量交换
{
  let a = 1;
  let b = 2;
  [a,b] = [b,a];
  console.log(a,b); //2,1
}

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

//
{
  let o = {p:42,q:true};
  let {p,q}=o;
  console.log(p,q);
}
