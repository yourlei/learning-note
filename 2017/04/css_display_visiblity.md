# css dispaly vs visibility

> 相同点：两个属性都可以设置元属是否可见；

可取的值有：

``` js
display: none/block/inline/flex;

visibility: hidden/visible
```

>　不同点：

１、display是非继承属性，父元素display设置为none后，子元素无法通过修改自身display属性显示;而visibility则是继承属性，子元素可将值设为visible显示;

2、元素display设置为none后，在DOM树中消失，不占据页面中的位置；而visibility则会保留原来的位置