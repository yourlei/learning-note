> pre元素换行

pre元素主要使用在页面中贴出code的时候用，但当code长度过长时会超车pre元素的宽度出现越界的情况，影响页面的布局效果.偶然发现通过设置 **white-space**属性可让过长的行自动换行.

``` js
pre > code {
	white-space: pre-wrap;
}
```
white-space可选的属性值有：
``` js
normal: 	默认。空白会被浏览器忽略。
pre: 	    空白会被浏览器保留。其行为方式类似 HTML 中的 <pre> 标签。
nowrap: 	文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。
pre-wrap: 保留空白符序列，但是正常地进行换行。
pre-line: 合并空白符序列，但是保留换行符。
inherit: 	规定应该从父元素继承 white-space 属性的值。
```
