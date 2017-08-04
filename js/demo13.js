{
  //基本定义
  let ajax = function(callback){
    console.log('执行');
    setTimeout(function () {
      callback&&callback.call();
    }, 1000);
  };
  ajax(function(){
    console.log('timeout1');
  })
}
//执行
//timeout1

{
  let ajax = function(){
    console.log('执行2');
    return new Promise(function(resolve,reject){
      setTimeout(function () {
        resolve()
      }, 1000);
    })
  };

  ajax().then(function(){
    console.log('promise','timeout2');
  })
}
// 执行2
// Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
// promise timeout2

{
  let ajax = function(){
    console.log('执行2');
    return new Promise(function(resolve,reject){
      setTimeout(function () {
        resolve()
      }, 1000);
    })
  };

  ajax().then(function(){
    return new Promise(function(resolve,reject) {
      setTimeout(function functionName() {
        resolve()
      },2000)
    })
  }).then(function(){
    console.log('timeout3');
  })
}
//执行2
//Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
//timeout3

{
  let ajax =function(num) {
    console.log('执行4');
    return new Promise(function(resolve,reject) {
      if (num>5) {
        resolve()
      }else {
        throw new Error('出错啦')
      }
    })
  }

  ajax(6).then(function () {
    console.log('log',6);
  }).catch(function (err) {
    console.log('catch',err);
  })

  ajax(3).then(function () {
    console.log('log',3);
  }).catch(function (err) {
    console.log('catch',err);
  })
}
//执行4
//log 6

// catch Error: 出错啦
//     at <anonymous>:8:15
//     at Promise (<anonymous>)
//     at ajax (<anonymous>:4:12)
//     at <anonymous>:19:3

//Promise {[[PromiseStatus]]: "resolved", [[PromiseValue]]: undefined}

{
  //所有图片加载完再添加到页面
  function loadImg(src) {
    return new Promise((resolve,reject)=>{
      let img = document.createElement('img');
      img.src=src;
      img.onload = function () {
        resolve(img)
      }
      img.onerror = function (err) {
        reject(err)
      }
    })
  }

  function showImgs(imgs) {
    imgs.forEach(function (img) {
      document.body.appendChild(img);
    })
  }

  Promise.all([
    loadImg(''),//png等图片
  ]).then(showImgs)
}


{
  //有一个图片加载完就添加到页面
  function loadImg(src) {
    return new Promise((resolve,reject)=>{
      let img = document.createElement('img');
      img.src=src;
      img.onload = function () {
        resolve(img)
      }
      img.onerror = function (err) {
        reject(err)
      }
    })
  }

  function showImgs(img) {
    let p = document.createElement('p');
    p.appendChild(img);
  }

  Promise.race([
    loadImg('');//
  ]).then(showImgs)
}
