> jquery function

> hasClass(), is()

判定元素是否包含有指定的类

``` js
$(selector).hasClass('className'); // 多个类用空格分隔
$(selector).is('className, className'); // 多个类用逗号分隔
```

> siblings()

获取当前元素的同级元素

``` js
$('ele').siblings();

$('ele').siblings('selector')
```

> removeClass(), addClass()

移除或添加指定的类

> attr('key', 'value')

设置属性值或获取属性值

``` js
$('img').attr('src');

$('img').attr('src', 'link');
```

