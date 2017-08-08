{
  //Generator
  let tell = function* () {
    yield 'a';
    yield 'b';
    return 'c'
  };

  let k = tell();
  console.log(k.next());//{value: "a", done: false}
  console.log(k.next());//{value: "b", done: false}
  console.log(k.next());//{value: "c", done: true}
  console.log(k.next());//{value: undefined, done: true}
}

{
  let obj = {};
  obj[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
  }
  for (let value of obj) {
    console.log('value',value);//value 1 value 2 value 3
  }
}

{
  let state = function* () {
    while (1) {
      yield 'A';
      yield 'B';
      yield 'C';
    }
  }
  let status = state();
  console.log(status.next());//{value: "A", done: false}
  console.log(status.next());//{value: "B", done: false}
  console.log(status.next());//{value: "C", done: false}
  console.log(status.next());//{value: "A", done: false}
  console.log(status.next());//{value: "B", done: false}
}

{
  let draw = function (count) {
    //具体抽奖逻辑
    console.info(`剩余${count}次`);
  }

  let reside = function* (count) {
    while (count>0) {
      count--;
      yield draw(count);
    }
  }

  let star = reside(5);
  let btn = document.createElement('button');
  btn.id = 'start';
  btn.textContent ='抽奖';
  document.body.appendChild(btn);
  document.getElementById('start').addEventListener('click',function () {
    star.next();
  },false)
  // 页面上会生成一个抽奖按钮
  // 剩余4次
  // 剩余3次
  // 剩余2次
  // 剩余1次
  // 剩余0次
}

{
  // 长轮训
  let ajax = function* () {
    yield new Promise(function (resolve,reject) {
      setTimeout(function () {
        resolve({code:0});
      },200);
    })
  }
  // pull
  let pull = function () {
    let generator =ajax();
    let step = generator.next();
    step.value.then(function (d) {
      if (d.code!=0) {
        setTimeout(function () {
          console.info('wait');
          pull()
        },1000)
      }else {
        console.info(d);
      }
    })
  }
  pull();//{code: 0}
}
