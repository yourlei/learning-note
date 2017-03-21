# javascript call and apply

> call(thisArg, arg1, arg2, ...)

> Parameters
thisArg
The value of this provided for the call to a function. Note that this may not be the actual value seen by the method: if the method is a function in non-strict mode code, null and undefined will be replaced with the global object and primitive values will be converted to objects.
arg1, arg2, ...
Arguments for the object.

> fun.apply(thisArg, [argsArray])
Parameters
thisArg
The value of this provided for the call to fun. Note that this may not be the actual value seen by the method: if the method is a function in non-strict mode code, null and undefinedwill be replaced with the global object, and primitive values will be boxed.
argsArray
An array-like object, specifying the arguments with which fun should be called, or null or undefined if no arguments should be provided to the function. Starting with ECMAScript 5 these arguments can be a generic array-like object instead of an array. See below for browser compatibility information.

> code

``` js
var User = {
	count: 1,
	getCount: function () {
		return this.count;
	}
}

console.log(User.getCount()); // 1

var foo = User.getCount; 
console.log(foo()); // undefined 此时this指向window对象
```

> 指定this上下文环境
``` js
var foo = User.getCount.bind(User);
console.log(foo);  // 1

```

> 兼容低版本的浏览器

``` js
Function.prototype.bind = Function.prototype.bind || function(context){
  var self = this;

  return function(){
    return self.apply(context, arguments);
  };
}
```
