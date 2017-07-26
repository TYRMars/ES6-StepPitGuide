//ES5中二进制的表示方法
{
  console.log('b',0b111110111);
  console.log('B',0B111110111);
  console.log(0o767); //503
}

//Number.isFinite 判断值是否有尽
{
  console.log('15',Number.isFinite(15)); //true
  console.log('NaN',Number.isFinite(NaN));//false
  console.log('1/0',Number.isFinite('true'/0));//false
}
//判断不是数
{
  console.log('NaN',Number.isNaN(NaN));//true
  console.log('0',Number.isNaN(0));//false
}
//判断是不是整数
{
  console.log('25',Number.isInteger(25)); //true
  console.log('25.0',Number.isInteger(25.0)); //true
  console.log('25.1',Number.isInteger(25.1)); //false
  console.log('25',Number.isInteger('25')); //接受参数必须是一个数
}
//判断一个数（-2的53次方到2的53次方）之间，不包含端点
{
  console.log(Number.MAX_SAFE_INTEGER);//常量，表示数的最大上限9007199254740991
  console.log(Number.MIN_SAFE_INTEGER);//常量，表示数的最低下限-9007199254740991
  console.log(Number.isSafeInteger(10));//true
  console.log(Number.isSafeInteger('a'));//false
}
//判断小数部分，并返回整数部分
{
  console.log('4.1',Math.trunc(4.1)); //4
  console.log('4.1',Math.trunc(4.9)); //4
}
//判断是正数负数还是0
{
  console.log('-5',Math.sign(-5)); //-1
  console.log('0',Math.sign(0)); //0
  console.log('5',Math.sign(5)); //1
  console.log('50',Math.sign('50')); //1
  console.log('foo',Math.sign('foo'));//NaN
}
//得出一个数的立方根
{
  console.log('-1',Math.cbrt(-1)); //-1
  console.log('8',Math.cbrt(8)); //2
}
