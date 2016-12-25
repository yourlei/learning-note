> css3 linear-gradient渐变

> CSS 渐变 是在 CSS3 Image Module 中新增加的 <image> 类型. 使用 CSS 渐变可以在两种颜色间制造出平滑的渐变效果. 用它代替图片，可以加快页面的载入时间、减小带宽占用。同时，因为渐变是由浏览器直接生成的，它在页面缩放时的效果比图片更好，因此你可以更加灵活、便捷的调整页面布局。
浏览器支持两种类型的渐变：线性渐变 (linear)，通过 linear-gradient 函数定义，以及 径向渐变 (radial)，通过 radial-gradient 函数定义. *(摘自MDN CSS开发指南)*.

> 线性渐变(linear-gradient)

使用linear-gradient需要设置一个渐变的起始方向或是调度值, 另外还需设定渐变的颜色;

> -webkit-linear-gradient

<pre>-webkit-linear-gradient(0deg, pink, orange) # 从左到右</pre>

<pre>-webkit-linear-gradient(45deg, pink, orange)</pre>

<pre>-webkit-linear-gradient(90deg, pink, orange) # 从下到上</pre>

<pre>-webkit-linear-gradient(180deg, pink, orange) # 从右到左</pre>

> linear-gradient

<pre>linear-gradient(0deg, pink, orange) # 从下到上</pre>

<pre>linear-gradient(45deg, pink, orange)</pre>

<pre>linear-gradient(90deg, pink, orange) # 从左到右</pre>

<pre>linear-gradient(180deg, pink, orange) # 从上到下</pre>

*w3c的linear-gradient渐变方向与各厂商的带前缀的渐变方向不同;*