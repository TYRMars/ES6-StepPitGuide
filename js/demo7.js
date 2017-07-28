//参数默认值
{
  function test(x,y = 'world') {
    console.log('默认值',x,y);
  }
  test('hello'); //默认值 hello world
  test('hello','kill');
}
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
//=>
{
  let arrow = v => v*2;
  let arrow2 = () => 5;
  console.log(arrow(3));//6
  console.log(arrow2());//5
}
//尾调用，函数式
{
  function tail(x) {
    console.log('tail',x);
  }
  function fx(x){
      return tail(x);
  }
  fx(123);
}
