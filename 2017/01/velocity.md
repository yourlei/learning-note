> velocity js动画库	

#### velocity.js官网 ![velocity](http://velocityjs.org/), 官网提供的了velocity的API方法, 内置的动画效果及DEMO, 关键方法的使用如自定义动画RegisterEffect, RegisterUI, velocity适合于定义动画序列的场景, 同时在移动端也具有优势, 相比于使用css定义动画velocity更加强大.

#### 引用velocity.js库, 使用velocity时配合jquery使用更方便
``` shell
<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.4.1/velocity.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.4.1/velocity.ui.js"></script>
```
> 绑定动画

- 方式一 使用velocity方法
``` shell
$('id').velocity({
	// TODO ....
	// width height margin
	property
}, {duration: 1000});
```

- 方式二 定义动画序列
``` shelll
var seq = [
	{
		elements: $('id1'),
		properties: {width: 100px},
		options: {
			duration: 100,
			sequenceQueue: false  // 关闭顺序执行
		}
	},
	{
		elements: $('id2'),
		properties: {width: 100px},
		options: {
			delay: 100, // 开始时延迟
			duration: 100
		}
	}];

$.Velocity.RunSequence(seq);
```

> 自定义动画
``` shell
// 定义动画
$.Velocity.RegisterEffect('leiyu.slideUp', {
	defaultDuration: 300,
	calls: [
		[{opacity: [1, 0], translateY: [0, 100]}]
	]
});

// 定义序列
var seq = [
	{
		elements: $('id1'),
		properties: {leiyu.slideUp},
		options: {
			duration: 100,
			sequenceQueue: false  // 关闭顺序执行
		}
	},
	{
		elements: $('id2'),
		properties: {leiyu.slideUp},
		options: {
			delay: 100, // 开始时延迟
			duration: 100
		}
	}];

// run
$.Velocity.RunSequence(seq);
```

> 引用velocity内置动画

``` shell
$('ele').on('mouseover', function () {
	$(this).velocity('callout.shake');
})
```

