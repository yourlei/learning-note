### Vue direction v-on

> 绑定事件监听器。事件类型由参数指定。表达式可以是一个*方法的名字*或一个内联语句，如果没有修饰符也可以省略。

> 用在普通元素上时，只能监听 原生 DOM 事件。用在自定义元素组件上时，也可以监听子组件触发的*自定义事件*。

* 缩写： @

* 类型： Function | Inline Statement

* 参数： event (required)

* 修饰符：
``` js
.stop - 调用 event.stopPropagation()。
.prevent - 调用 event.preventDefault()。
.capture - 添加事件侦听器时使用 capture 模式。
.self - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
.{keyCode | keyAlias} - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
.native - 监听组件根元素的原生事件。
```

实例：

* 父组件：　App.vue
* 子组件： Nav.vue

> Nav.vue

``` js
<template>
	<div class="nav">
		<ul>
			<li><a href="">Home</a></li>
			<li><a href="">News</a></li>
			<li><a href="">Product</a></li>
			<li><a href="">About</a></li>
			<li><a href="">{{ message }}</a></li>
			<li><button v-on:click="print">push</button></li>
		</ul>
	</div>
</template>
<script>
  export default {
    name: 'nav',
    data: function () {
      return {
        msg: 'hello vue component'
      }
    },
    props: ['message'],
    methods: {
      print: function () {
        console.log('child data ' + this.msg)

        console.log('parent data ' + this.$parent.parentInfo)

        // $emit 定义触发事件，即自定义 event
        this.$emit('print')
      }
    }
  }
</script>
<style scoped>
	.nav {
		width: 100%;
		background-color: cornflowerblue;
	}
</style>
```

> App.vue

``` js
<template>
  <div id="app">
  	<!-- 监听子组件的　print事件 -->
    <navbar  v-bind:message="parentInfo" v-on:print="counter"></navbar>
    <h2>{{ count }}</h2>
    <img src="./assets/logo.png">
    <div>
      <button v-on:click="log()">push</button>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Nav from './components/common/Nav.vue'

  // create global component
  Vue.component('my-nav', {
    template: '<div>hello component</div>'
  })
  export default {
    name: 'app',
    data () {
      return {
        parentInfo: 'Welcome to Your Vue.js App',
        count: 0
      }
    },
    methods: {
      say: function () {
        console.log('i am father')
      },
      counter: function () {
        this.count += 1
      }
    },
    components: {
      navbar: Nav
    }
  }
</script>
```

** 用在自定义元素组件上时，也可以监听子组件触发的*自定义事件*。**

> v-on:customEvent 可以实现子组件中的事件触发关联到父组件的方法，即联动效果

