{
  let list = new Set();
  list.add(5);
  list.add(7);

  console.log('size',list.size);// size 2
}

{
  let arr = [1,2,3,4,5];
  let list = new Set(arr);

  let arr2 = [1,2,3,2,3];
  let list2 = new Set(arr2);

  console.log('size',list.size); //5
  console.log('size2',list2.size); //2
}

{
  let list = new Set();
  list.add(1);
  list.add(2);
  list.add(1);

  console.log('list',list);//Set(2) {1, 2}

  let arr = [1,2,3,1,2];
  let list2 =new Set(arr);

  console.log('unique',list2);//Set(3) {1, 2, 3}

}

{
  let arr = ['add','delete','clear','has'];
  let list = new Set(arr);

  console.log('has',list.has('add'));//true
  console.log('delete',list.delete('add'));//true Set(3) {"delete","clear","has"}
  list.clear();
  console.log('clear',list);
}
//set 遍历
{
  let arr = ['add','delete','clear','has'];
  let list = new Set(arr);

  for (let key of list.keys()) {
    console.log('key',key);//key add key delete key clear key has
  }

  for (let value of list.values()) {
    console.log('value',value);//value add value delete value clear value has
  }

  for (let value of list) {
    console.log('value',value);//value add value delete value clear value has
  }

  for (let [key,value] of list.entries()) {
    console.log('entries',key,value);// entries add add entries delete delete entries clear clear entries has has
  }

  list.forEach(function(item){
    console.log(item);
  })
}

{
  let weaklist = new WeakSet();
  let args = {};
  weaklist.add(args);
  //weaklist.add(2); error
  console.log('weaklist',weaklist); //WeakSet {Object {}}
}

{
  let map = new Map();
  let arr = ['123'];

  map.set(arr,456);

  console.log('map',map,map.get(arr));//map Map(1) {["123"] => 456} 456
}

{
  let map = new Map([['a',123],['b',456]]);
  console.log('map args',map);//map args Map(2) {"a" => 123, "b" => 456}
}

{
  let map = new Map([['a',123],['b',456]]);
  console.log('size',map.size);//size 2
  console.log('delete',map.delete('a'),map);//delete true Map(1) {"b" => 456}
  console.log('clear',map.clear(),map);//Map(0) {}
}

{
  let weakmap = new WeakMap();//接收的K值必须是对象

  let o = {};
  weakmap.set(o,123);
  console.log(weakmap.get(o));
}

{
  //数据解构横向对比，增，删，改，查
  let map = new Map();
  let array = [];
  //增
  map.set('t',1);
  array.push({t:1});

  console.log('map-array',map,array);//Map(1) {"t" => 1}

  //查 map为布尔值，array为返回那个对象的值
  let map_exist = map.has('t');
  let array_exist = array.find(item=>item.t);
  console.info('map-array',map_exist,array_exist);//true Object {t: 1}

  //改
  map.set('t',2);
  array.forEach(item=>item.t?item.t=2:'');
  console.info('map-array',map,array);//Map(1) {"t" => 2}

  //删
  map.delete('t');
  let index = array.findIndex(item=>item.t);
  array.splice(index,1);
  console.log('map-array',map,array);//Map(0) {} []
}

{
  //set 和 array对比
  let set = new Set();
  let array=[];

  //增
  set.add({'t':1});
  array.push({t:1});

  console.info('set-array',set,array);//Set(1)

  //查
  let set_exist = set.has({t:1});
  let array_exist = array.find(item=>item.t);
  console.log('set-array',set_exist,array_exist);//false Object {t: 1}

  //改 set 也需要用foreach
  set.forEach(item=>item.t?item.t=2:'');
  array.forEach(item=>item.t?item.t=2:'');
  console.log('set-array',set,array);//{Object {t: 2}}

  //删
  set.forEach(item=>item.t?set.delete(item):'');
  let index = array.findIndex(item=>item.t);
  array.splice(index,1);
  console.log('set-array-empty',set,array);//Set(0) []
}

{
  //map,set,object对比
  let item = {t:1};
  let map = new Map();
  let set = new Set();
  let obj = {};

  //增
  map.set('t',1);
  set.add(item);
  obj['t'] = 1;

  console.log('map-set-obj',obj,map,set);// map-set-obj {t: 1} Map(1) {"t" => 1} Set(1) {{…}}

  //查
  console.log({
    map_exist:map.has('t'),
    set_exist:set.has(item),
    obj_exist:'t' in obj
  });//{map_exist: true, set_exist: true, obj_exist: true}

  //改
  map.set("t",2);
  item.t = 2;
  obj['t'] = 2;
  console.log('map-set-obj',obj,map,set);

  //删除
  map.delete('t');
  set.delete(item);
  delete obj['t']
  console.log('map-set-obj-empty',obj,map,set);//map-set-obj-empty {} Map(0) {} Set(0) {}
}
