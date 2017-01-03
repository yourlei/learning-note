> Array

> 创建数组

``` js
var a = [1, 2, 3];         # 字面量方式创建
var b = new Array(1, 2, 3) # 构造函数的方式创建，可省略new关键字
```
--- 创建数组时有趣的事：
1. 数组长度不需要指定；
2. 当使用Array构造函数时，若只有一个参数则该参数作为数组长度；
3. 数组的长度由下标索引决定，如：
``` js
var a = [1, 2, 3];
a [13] = 13;

console.log(a.length) // 14
```
4. 稀疏数组，即存在很多空白或空缺单元的数组；
5. 数组也是对象，因此也可以通过key-value的方式进行索引：
``` js
var a = [];
a[0] = 1;
a['type'] = 'js'

console.log(a.length); # 1

a['13'] = 'AI';

console.log（a.length); # 14
```
*注意： 通过key-value方式添加的元素不计入数组的长度, 如果字符可以转换为数值则会计入length;*

6. 清空数组的方法：
- 重置数组长度为 0；

> 数组方法

1. indexOf(arg): 查找与arg匹配的元素，并返回元素下标；若无匹配项则返回-1；

``` js
var a = [1, 2, 3, 'java'];
console.log(a.indexOf(3));     # 2
console.log(a.indexOf('ja'));  # -1
cosole.log(a.indexOf('java')); # 3
```
2. concat(arr): 数组连接，将arr数组中的元素追加到另一数组中，执行后的操作不会保留在数组；
``` js
var a = [1, 2, 3];
var b = ['fly', 'with', 'me'];

console.log(a.concat(b)); # [1, 2, 3, 'fly', 'with', 'me']
console.log(a);           # [1, 2, 3]
```
