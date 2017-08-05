{
  //导出
  export let A = 123;

  export function test() {
    console.log('test');
  }

  export class Hello {
    test() {
      console.log('class');
    }
  }
}

{
  let A = 123;
  let test = function () {
    console.log('test');
  }
}
class Hello {
  test() {
    console.log('class');
  }
}

//不起名字，由引入方起名
export default {
  A,
  test,
  Hello
}
