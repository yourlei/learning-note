> jquery ajax(), get(), post()

通过jquery提供的ajax、get、post方法可以很好的实现异步请求，达到不刷新页面就能更新数据的效果.

> ajax

``` js
  $.ajax({
		type: 'get/post/put',
  	url: '',
  	dataType: 'json/jsonp/txt',
  	timeOut: 3000,
  	beforeSend: function () {
  		showLoading();
  	},
  	success: function (data, status) {
  		// do something
  	},
  	complete: function () {
  		hideLoading();
  	},
  	error: function (xhr, status) {
  		alert(...);
  	}
  })
```
- type: 提交方式
- url：提交到的地址
- dataType: 返回的数据类型
- timeOut: 请求的超时时间
- beforeSend: 数据返回前执行的操作
- success： 请求成功时执行的操作
- complete：请求完成时执行的操作(请求成功或失败都会执行)
- error: 请求数据失败时执行的操作

``` js
 $.get(url, function (data, status) {
		if(status == 'success')
		{
			// do something
		}
 });
```
get()方法并不会马上向下执行，而是当请求完成(成功或失败)时才会进入到function中


``` js
  $.post(url, function (data, status) {
		// do something
  });
```