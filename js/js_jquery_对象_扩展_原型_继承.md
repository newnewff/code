扩展原生js
```javascript
function ECMS(){
	this.SelectPostUser={
		_p:{isLoadEndFlag:false,controlId:'',data:null,url:''},
		_moveUser:function(){},
		_loadData:function(){this._p.isLoadEndFlag=true;},
		isLoadEnd:function(){return this._p.isLoadEndFlag},
		init:function(params){
			var _c=this;
			_c._p.controlId=params.controlId;
			if(typeof params.data=="object"){
				_c._loadData(params.data);
			}else{
				$.get(params.url).done(function(data){
					_c._loadData(data);
				});
			}
		},
		show:function(){},
		setUserSelected:function(){},
		getUserSelected:function(){},
		disabled:function(){}
	},
	this.SelectPostUserByTree={

	}
}
ECMS.RegDropDown=function(){}

var selectDuty=new ECMS();
selectDuty.SelectDutyUserForTree.init({controlId:'div1',url:''});
$(btn).click(function(){
	selectDuty.SelectDutyUserForTree.show();
})
```
```js
String.prototype.addstring = function () { //给 String 类型添加一个方法
	return this + '，被添加了！'; //this 代表调用的字符串
};
```
jquery扩展  

jQuery.fn.extend(object);  给jQuery对象添加方法。  

jQuery.extend(object);  为扩展jQuery类本身.为类添加新的方法。
```js
$.fn.InitUserList=function(params){

}
$('#div1').InitUserList({data:data});
```

```js
jQuery.bar = function(param) {   
alert('This function takes a parameter, which is "' + param + '".');  
}; 
$.bar('bar');  
```

```js
$.fn..extend({         
	bar: function(param) {      
		alert('This function takes a parameter, which is "' + param +'".');      
	}     
});  
      
$.fn.hilight = function(options) {    
  var defaults = {    
    foreground: 'red',    
    background: 'yellow'    
  };      
  var opts = $.extend(defaults, options);    
  // Our plugin implementation code goes here.    
};    
我们的插件可以这样被调用：  
$('#myDiv').hilight({    
  foreground: 'blue'    
});     
```
暴露插件的默认设置
```js
$.fn.hilight = function(options) {    
  var opts = $.extend({}, $.fn.hilight.defaults, options);    
};    
$.fn.hilight.defaults = {    
  foreground: 'red',    
  background: 'yellow'    
};     

//这个只需要调用一次，且不一定要在ready块中调用  
$.fn.hilight.defaults.foreground = 'blue';    
$('#myDiv').hilight();   
```

jquery使用命名空间扩展
```
jQuery.myPlugin = {          
foo:function() {          
alert('This is a test. This is only a test.');          
},          
bar:function(param) {          
alert('This function takes a parameter, which is "' + param + '".');    
}         
};  
采用命名空间的函数仍然是全局函数，调用时采用的方法：  
$.myPlugin.foo();         
$.myPlugin.bar('baz');  
```

判断属性是否存在
```
in 操作符会在通过对象能够访问给定属性时返回 true，无论该属性存在于实例中还是原
型中。
alert('name' in box); //true，存在实例中或原型中
我们可以通过 hasOwnProperty()方法检测属性是否存在实例中，也可以通过 in 来判断
实例或原型中是否存在属性。那么结合这两种方法，可以判断原型中是否存在属性。
function isProperty(object, property) { //判断原型中是否存在属性
  return !object.hasOwnProperty(property) && (property in object);
}
```

动态原型模式
```js
function Box(name ,age) { //将所有信息封装到函数体内
	this.name = name;
	this.age = age;
	this.setting='default';
	Box.prototype.setSetting=function(value){
		this.setting=value;
	}
　　if (typeof this.run != 'function') { 　　　　　　　　//仅在第一次调用的初始化
　　　　Box.prototype.run = function () {
　　　　　　return this.name + this.age + '运行中...';
　　　　};
　　}
  this.area={
           _p:{a:false,b:''},
           init:function(){} 
     } 
}
var box = new Box('Lee', 100);
box.area.init(); 
alert(box.run());
```

```js
var Circle={ "PI":3.14159, "area":function(r){ return this.PI * r * r; } };  
alert( Circle.area(1.0) );  
```

寄生构造函数
```
function Box(name, age) {
　　var obj = new Object();
　　obj.name = name;
　　obj.age = age;
　　obj.run = function () {
　　return this.name + this.age + '运行中...';
　　};
  return obj;
}
```

构造函数模式
```
function Box(name, age) {
	this.name = name;
	this.age = age;
　　this.run = function () {
　　   return this.name + this.age + '运行中...';
　　};
}
var box1 = new Box('Lee', 100);
alert(box1.run());
```


继承
```js
var Person = function(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
Person.prototype.fullName = function(){
    return this.firstName + " " + this.lastName;
};


var Spy = function(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
};
Spy.prototype = new Person();
 
Spy.prototype.spy = function(){
    alert(this.fullName() + " is spying.");   
}
 
var mySpy = new Spy("Mr.", "Spy", 50);
mySpy.spy();
```
