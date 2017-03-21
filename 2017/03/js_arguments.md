# javascript arguments

MDN上关于arguments的描述：

> The arguments object is not an Array. It is similar to an Array, but does not have any Arrayproperties except length. For example, it does not have the pop method. However it can be converted to a real Array:

即arguments对象是伪数组，除了具有length属性外没有继承Array的原型方法；通过下面两种方法可以将其转为Array

``` js
var args = Array.prototype.slice.call(arguments);
// or
var args = [].slice.call(arguments);
```
