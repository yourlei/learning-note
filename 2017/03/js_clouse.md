# js 闭包
> 函数能够记住并访问作用域，即使在当前作用域之外

``` js
function fun1 () {
	var a = 0;

	function bar() {
		console.log(a);
	}

	return bar;
}

var foo = fun1();
foo();
```