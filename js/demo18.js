{
  let readonly = function(target,name,desctiptor){
    desctiptor.writable=false;
    return desctiptor
  };
  //用于类里面

  class Test{
    @readonly
    time(){
      return '2017-08'
    }
  }

  let test = new Test();
  console.log(test.time());
}

{
  let typename = function(target,name,desctiptor){
    target.myname='hello';
  }
  @typename
  class Test{

  }
  console.log('修饰类',Test.myname);
  //第三方修饰器的js库：core-decorators;

  
}
