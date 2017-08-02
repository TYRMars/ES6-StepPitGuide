{
  //基本定义和生成实例
  class Parent{
    constructor(name='zhangjianan'){
      this.name=name;
    }
  }
  let v_parent=new Parent('v');
  console.log('构造函数和实例',v_parent); //构造函数和实例 Parent {name: "v"}
}

{
  //继承
  class Parent{
    constructor(name='zhangjianan'){
      this.name=name;
    }
  }

  class Child extends Parent{

  }
  console.log('继承',new Child()); //继承 Child {name: "zhangjianan"}
}

{
  //继承传递参数
  class Parent{
    constructor(name='zhangjianan'){
      this.name=name;
    }
  }

  class Child extends Parent{
    constructor(name='child'){
      super(name);//父类参数列表
      this.type='child';
    }
  }
  console.log('继承参数传递',new Child()); //继承参数传递 Child {name: "child", type: "child"}
}
//getter and setter
{
  class Parent{
    constructor(name='zhangjianan'){
      this.name=name;
    }

    get longName(){
      return '666'+this.name
    }
    set longName(value){
      this.name=value;
    }
  }

  let v = new Parent();
  console.log('getter',v.longName);//getter 666zhangjianan
  v.longName='hello';
  console.log('setter',v.longName);
}

{
  //静态方法
  class Parent{
    constructor(name='zhangjianan'){
      this.name=name;
    }

    static tell(){
      console.log('tell');
    }
  }
  Parent.tell();//tell
}

{
  //静态属性
  class Parent{
    constructor(name='zhangjianan'){
      this.name=name;
    }

    static tell(){
      console.log('tell');
    }
  }
  Parent.type='test';
  console.log('静态属性',Parent.type);//静态属性 test
}
