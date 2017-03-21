> javascript this

#### 如何理解this关键字

> 错误的理解
this指对象本身，或是指当前作用域

``` js
function foo (num) {
	console.log('foo: ' + num);

  // 记录foo被调用的次数
	this.count++;
}

foo.count = 0;

for(var i = 0; i < 10; i++)
{
	if(i > 5)
	{
		foo(i);
	}
}

console.log(foo.count);
```