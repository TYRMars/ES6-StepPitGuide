{
  console.log('a','\u0061');
  console.log('s','\u20BB7');

  console.log('s','\u{20BB7}');
}

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

{
  console.log(String.fromCharCode("0x20bb7"));  //ஷ
  console.log(String.fromCodePoint("0x20bb7")); //𠮷
}

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

//模版字符串
{
  let name = "list";
  let info = "hello world";
  let m = `i am ${name},${info}`
  console.log(m); //i am list,hello world
}
//ES7草案
{
  console.log('1'.padStart(2,'0'));//01

}

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

{
  console.log(String.raw`Hi\n${1+2}`); //Hi\n3
  console.log(`Hi\n${1+2}`);
  //Hi
  //3
}
