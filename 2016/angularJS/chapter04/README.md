------------------------------
   mvc module view controller
------------------------------

> angular 中通过不同的module划分作用域，一个**ng-app** 可能依赖多个module

> controller 中控制view呈现的数据

> view 的独立可以实现视图模板的复用

项目开发中应注意文件的划分，
如：- app.js         入口文件
    - controllers.js 建立使用到的控制器
    - drectives.js   创建指令
    - filters.js     过滤器


---
## ngRoute

``` js
  $routeProviter.when('/hello', {
    template: '*.html',   // 视图模板
    controller: 'controllerName'  // 指定所在的controller
  }).when('/list', {
  	template: '*.html',
  	contorller: 'controllerName'
  }).otherwise({
  	redirectTo: '/hello'  //route
  })
```