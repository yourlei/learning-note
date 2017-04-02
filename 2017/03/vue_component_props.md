### Vue component props

> 组件实例的作用域是孤立的。这意味着不能(也不应该)在子组件的模板内直接引用父组件的数据。要让子组件使用父组件的数据，我们需要通过子组件的props选项。

``` js
Vue.component('child', {
  // 声明 props
  props: ['message'],
  // 就像 data 一样，prop 可以用在模板内
  // 同样也可以在 vm 实例中像 “this.message” 这样使用
  template: '<span>{{ message }}</span>'
})
```

``` js
<child message="hello!"></child>
```

**props选项可理解为是在子组件中添加了某个组件属性，当在父组件中引用子组件时直接通过对该属性进行赋值，即可将数据传递到子组件；**

---

#### 动态props 

> *v-bind*

``` js
<div>
  <input v-model="parentMsg">
  <br>
  <child v-bind:my-message="parentMsg"></child>
</div>
```	
通过*v-bind* 将子组件的属性绑定到父组件定义的数据中

---