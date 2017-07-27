//Array.of
{
  let arr = Array.of(3,4,7,9,11);
  console.log('arr=',arr); //arr= (5) [3, 4, 7, 9, 11]

  let empty = Array.of();//undefined
  console.log('empty',empty);
}
//伪数组或集合转换为真正的数组
{
  //取页面上所有的p元素
  let p = document.querySelectorAll('p');
  let pArr=Array.from(p);
  pArr.forEach(function (item) {
    console.log(item.textContent);//
  });
  //映射
  console.log(Array.from([1,3,5],function(item){return item*2}));//[2, 6, 10]
}
//遍历元素改变值
{
  console.log('fill-7',[1,'a',undefined].fill(7));//fill-7 (3) [7, 7, 7]
  console.log('fill,pos',['a','b','c'].fill(7,1,3));//fill,pos (3) ["a", 7, 7]
}
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
