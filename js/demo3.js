{
  //ES5
  let regex = new RegExp('xyz','i');
  let regex2 = new RegExp(/xyz/i);
  console.log(regex.test('xyz123'),regex2.test('xyz123'));//true true
  //ES6
  let regex3 = new RegExp(/xyz/ig,'i');
  console.log(regex3.flags);//i
}

{
  let s = 'bbb_bb_b';
  let a1=/b+/g;
  let a2=/b+/y;
  console.log('one',a1.exec(s),a2.exec(s));
  console.log('two',a1.exec(s),a2.exec(s));
  //g可以匹配到bb，y没有匹配成功，g修饰符是从上一次匹配的位置继续寻找，y匹配了第一个紧跟着下一个字符必须还能匹配到
}
