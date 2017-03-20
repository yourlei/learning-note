# js 闭包
> 函数能够记住并访问词法作用域，即使在当前作用域之外

``` js
function fun1 () {
	var a = 0;

	function bar() {
		console.log(a);
	}

	return bar;
}

var foo = fun1();
foo(); // 0
```
上面的代码中就产生了闭包，因为bar函数在其定义的词法作用域之外执行并引用了父函数中的变量a