#### vue commponent

### create component

#### 全局组件

``` shell
<div id="example">
  <my-component></my-component>
</div>
```

``` shell
Vue.component('my-component', {
	template: '<div>hello component</div>'
})
```

*通过该种方式创建的组件相当于是存在于全局作用域内，其他的.vue组件内可直接引用*

---

#### 局部组件

``` shell
var child = {
	template: '<h2>child component</h2>'
}
new Vue({
  el: '',
	components: {
	  my-component: child
}
})
```
*局部组件只在当前组件内有效*

---

#### 组件命名

*组件名以字母开头，后面跟字母、数值或下划线，并且不与 HTML 元素或 Vue 保留标签重名*
