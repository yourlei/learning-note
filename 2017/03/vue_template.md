> vue2.0 

#### install vue

``` shell
npm install vue-cli -g
```

#### vue command

``` shell
vue list　# 列出可用的ｖｕｅ模板
```

#### output

``` shell
Available official templates:

 ★  browserify - A full-featured Browserify + vueify setup with hot-reload, linting & unit testing.
 ★  browserify-simple - A simple Browserify + vueify setup for quick prototyping.
 ★  simple - The simplest possible Vue setup in a single HTML file
 ★  webpack - A full-featured Webpack + vue-loader setup with hot reload, linting, testing & css extraction.
 ★  webpack-simple - A simple Webpack + vue-loader setup for quick prototyping.
```

``` shell
vue init webpack projectname
```

> 生成的项目目录结构如下

``` shell
.
├── build/                      # webpack config files
│   └── ...
├── config/
│   ├── index.js                # main project config
│   └── ...
├── src/
│   ├── main.js                 # app entry file
│   ├── App.vue                 # main app component
│   ├── components/             # ui components
│   │   └── ...
│   └── assets/                 # module assets (processed by webpack)
│       └── ...
├── static/                     # pure static assets (directly copied)
├── test/
│   └── unit/                   # unit tests
│   │   ├── specs/              # test spec files
│   │   ├── index.js            # test build entry file
│   │   └── karma.conf.js       # test runner config file
│   └── e2e/                    # e2e tests
│   │   ├── specs/              # test spec files
│   │   ├── custom-assertions/  # custom assertions for e2e tests
│   │   ├── runner.js           # test runner script
│   │   └── nightwatch.conf.js  # test runner config file
├── .babelrc                    # babel config
├── .postcssrc.js               # postcss config
├── .eslintrc.js                # eslint config
├── .editorconfig               # editor config
├── index.html                  # index.html template
└── package.json                # build scripts and dependencies
```

开发中主要用到有**src**目录，组件的定义在该目录下的**components**下

#### 运行项目

``` shell
npm run dev
```

#### 编写*sass*样式

#### 参考资料

[install sass-loader](https://vuejs-templates.github.io/webpack/pre-processors.html)

[配置loader](https://github.com/vuejs/vue-loader/issues/363)

> install node-sass sass-loader

``` shell
cnpm install sass-loader node-sass --save-dev #　npm安装会卡住
```

> 配置加载器

``` shell
module: {
  rules: [
    {
        test: /\.s[a|c]ss$/,
        loader: 'style!css!sass'
    }
  ]
},
vue: {
  loaders: {
    scss: 'style!css!sass'
  }
}
```



