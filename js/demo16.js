{
  let arr = ['hello','world'];
  let map = arr[Symbol.iterator]();
  console.log(map);//Array Iterator {}
  console.log(map.next());//{value: "hello", done: false}
  console.log(map.next());//{value: "world", done: false}
  console.log(map.next());//{value: undefined, done: true}
}

{
  let obj = {
    start:[1,3,2],
    end:[7,8,9],
    [Symbol.iterator](){
      let self = this;
      let index = 0;
      let arr = self.start.concat(self.end);
      let len = arr.length;
      return {
        next(){
          if (index<len) {
            return{
              value:arr[index++],
              done:false
            }
          }else {
            return{
              value:arr[index++],
              done:ture
            }
          }
        }
      }
    }
  }
  for (let key of obj) {
    console.log(key);//1,3,2,7,8,9
  }
}

{
  let arr = ['hello','world'];
  for(let value of arr){
    console.log('value',value);
  }
}
