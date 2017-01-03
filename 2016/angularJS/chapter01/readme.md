-------------------------
    angular中的表达式
-------------------------

angular 中的表达式包含在双大括号中，如{{expression}}
表达式中可以包含字符、变量、数学运算，但没有循环、逻辑判断


> <span>data: {{data.time}}</span>
  <span>string: {{'hello world.'}}</span>
  <span>num1 + num2 = {{2+1}}</span>

> ng-bind指令也可以实现表达式的作用

> <span ng-bind=""></span>