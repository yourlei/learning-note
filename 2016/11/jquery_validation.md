> jquery validation 

一个表单验证插件, 提供了多种验证功能, 如常用的email, url, password等字段的验证. plugin中提供了validate()作为核心方法, 可自定义验证规则, 及message显示.

The validate method returns a Validator object that has a few public methods that you can use to trigger validation programmatically or change the contents of the form. The validator object has more methods, but only those documented here are intended for usage.

这是validation官网 http://jqueryvalidation.org/上的介绍.



``` js
$('#ele').validate({
	debug: true,  // 调试模式, 表单不提交
	relus: {
		username: 'required',  // 必填项
		password: 'required'
	},
	messages: {
		username: '用户名输入错误.',
		password: '密码输入错误.'
	}
});

```