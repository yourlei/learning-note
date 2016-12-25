> javascript检测浏览器版本

浏览器客户端中的windown.navigator对象, 其包含的属性保存了浏览器的相关信息, 如浏览器名称、运行的平台、
浏览器版本.其中userAgent属性包括了用于判断浏览器厂商、版本的信息.

如chrome的userAgent包含的信息：

* userAgent: "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36" *

``` js
function getBrowserInfo()
{
	var agent = navigator.userAgent.toLowerCase();

	var regStr_ie = /msie [\d.]+;/gi ;
	var regStr_ff = /firefox\/[\d.]+/gi;
	var regStr_chrome = /chrome\/[\d.]+/gi ;
	var regStr_saf = /safari\/[\d.]+/gi ;

	//IE
	if(agent.indexOf("msie") > 0)
	{
			return agent.match(regStr_ie) ;
	}

	//firefox
	if(agent.indexOf("firefox") > 0)
	{
			return agent.match(regStr_ff) ;
	}

	//Chrome
	if(agent.indexOf("chrome") > 0)
	{
		 return agent.match(regStr_chrome) ;
	}

	//Safari
	if(agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0)
	{
			return agent.match(regStr_saf) ;
	}
}
  var browser = getBrowserInfo();
	var verinfo = parseInt((browser+"").replace(/[^0-9.]/ig, "")); // 获取浏览器的版本号 
```