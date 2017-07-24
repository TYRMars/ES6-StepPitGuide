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
  console.log(String.fromCharCode("0x20bb7"));
  console.log(String.fromCodePoint("0x20bb7"));
}
