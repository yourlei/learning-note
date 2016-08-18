<!-- 
 * ECMAScript入门@阮一峰
 * 2016-08-18 
-->
> ES6 编译为 ES5

ES6已于2015年6月发布，当前大多数浏览器对ES6规范的支持程度还不完善，许多新的特性还未能被浏览器支持，因此使用ES6时需要将所写的代码转为ES5的语法规范，以便程序能够在各浏览器中运行。

#### 使用Traceur编译器将ES6转为ES5
1.方式一：直接插入网页

- 引入Traceur库文件

``` js
	<!-- 加载Traceur编译器 -->
	<script src="http://google.github.io/traceur-compiler/bin/traceur.js"
	        type="text/javascript"></script>
	<!-- 将Traceur编译器用于网页 -->
	<script src="http://google.github.io/traceur-compiler/src/bootstrap.js"
	        type="text/javascript"></script>
	<!-- 打开实验选项，否则有些特性可能编译不成功 -->
	<script>
	        traceur.options.experimental = true;
	</script>
``` 

- 编写代码

``` js
	<!-- 注意type值为module -->
	<script type="module">
	    class Calc {
	        constructor(){
	            console.log('Calc constructor');
	        }
	        add(a, b){
	            return a + b;
	        }
	    }

	    var c = new Calc();
	    console.log(c.add(4,5));
	</script>
``` 

2.方式二：在线转换

Traceur提供一个在[!线编译器](http://google.github.io/traceur-compiler/demo/repl.html)，可以在线将ES6代码转为ES5代码

3.命令行转换

实际是通过npm 安装一个插件，即前面用到的Traceur编译器，安装：

``` js
npm install traceur -g
```

命令行编译将ES6代码转为ES5：

``` js
traceur --script es6.js --out es5.js
```
防止有些特性编译失败，执行命令时加上选项**--experimental**

``` js
traceur --script es6.js --out es5.js --experimental
```

4.在node.js程序中使用traceur编译器

``` js
var traceur = require('traceur');
var fs = require('fs');

// 将ES6脚本转为字符串
var contents = fs.readFileSync('es6-file.js').toString();

var result = traceur.compile(contents, {
  filename: 'es6-file.js',
  sourceMap: true,
  // 其他设置
  modules: 'commonjs'
});

if (result.error)
  throw result.error;

// result对象的js属性就是转换后的ES5代码  
fs.writeFileSync('out.js', result.js);
// sourceMap属性对应map文件
fs.writeFileSync('out.js.map', result.sourceMap);
```
