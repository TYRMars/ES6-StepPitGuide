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
  // 执行2
  // Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
  // promise timeout2
}

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

{
  let ajax =function(num) {
    console.log('执行4');
    return new Promise(function(resolve,reject) {
      
    })
  }
}
