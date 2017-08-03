{
  let obj = {
    time:'2017-08-02',
    name:'net',
    _r:123
  };

  let moniter = new Proxy(obj,{
    //拦截对象的读取
    get(target,key){
      return target[key].replace('2017','2018')
    },
    //拦截对象的设置属性 target对象 key相应的属性 value相应属性的值
    set(target,key,value){
      if(key==="name"){
        return target[key]=value;
      }else{
        return target[key];
      }
    },
    //拦截 key in object操作
    has(target,key){
      if(key==='name'){
        return target[key];
      }else{
        return false;
      }
    },
    //拦截delete
    deleteProperty(target,key){
      if(key.indexOf('_')>-1){
        delete target[key];
        return true;
      }else{
        return target[key]
      }
    },
    //拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
    ownKeys(target){
      return Object.keys(target).filter(item=>item!='time')
    }
  });

  //moniter.time从moniter对象中读取time属性
  console.log('get',moniter.time);//get 2018-08-02

  moniter.time = '2019';
  moniter.name = 'zhangjianan'
  console.log('set',moniter.time,moniter.name);//set 2018-08-02 zhangjianan
  console.log('setall',moniter);//setall Proxy {time: "2017-08-02", name: "zhangjianan", _r: 123}
  console.log('has','name' in moniter,'time' in moniter);//has true false

  delete moniter.time//并不会被删除
  console.log('delete',moniter);//Proxy {time: "2017-08-02", name: "zhangjianan", _r: 123}

  delete moniter._r
  console.log('delete',moniter);//Proxy {time: "2017-08-02", name: "zhangjianan"}

  console.log('ownKeys',Object.keys(moniter));// ownKeys {name: "zhangjianan", _r: 123} 保护了time
}

//Reflect
{
  let obj = {
    time:'2017-03-11',
    name:'net',
    _r:123
  };

  console.log('Reflect-get',Reflect.get(obj,'time'));//Reflect-get 2017-03-11
  console.log('Reflect-set',Reflect.set(obj,'name','zhangjianan'));//Reflect-set true
  console.log('has',Reflect.has(obj,'name'));//has true
}

{
  function validator(target,validator) {
    return new Proxy(target,{
      _validator:validator,
      set(target,key,value,proxy){
        if (target.hasOwnProperty(key)) {
          let va = this._validator[key];
          if (!!va(value)) {
            return Reflect.set(target,key,value,proxy)
          }else {
            throw Error(`不能设置${key}到${value}`)
          }
        }else {
          throw Error(`${keys} 不存在`)
        }
      }
    })
  }
}

const personValidators={
  name(val){
    return typof val === 'string'
  }
  age(val){
    return typeof val === 'number' && val>18
  }
}

class Person {
  constructor(name,age) {
    this.name = name;
    this.age = age;
    return validator(this,personValidators)
  }
}
