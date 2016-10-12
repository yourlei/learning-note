> JS 获取n天后的日期

- 将当前日期转为毫秒, 计算n天的毫秒数, 通过getFullYear, getMonth, getDate方法组合成日期
``` js
function addDay(starDate, interval) {  
	    var now = new Date(starDate);  
	    var newdate = new Date();  
	    var sumtimes = now.getTime()+(interval*24*60*60*1000);  
	    newdate.setTime(sumtimes);  

	    var endDate = "'" + newdate.getFullYear() + "-" + (newdate.getMonth()+1) + "-" + newdate.getDate() + "'";
	    return {
	    	sumtimes: sumtimes,
	    	endDate: endDate
	 		};
	    // alert(endDate);  
	}
```