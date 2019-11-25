(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{222:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"https://npmjs.org/package/express-api-bootstrap",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://badge.fury.io/js/express-api-bootstrap.png",alt:"NPM Version"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://travis-ci.com/leftstick/express-api-bootstrap",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://www.travis-ci.org/leftstick/express-api-bootstrap.svg?branch=master",alt:"Build Status"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://coveralls.io/github/leftstick/express-api-bootstrap",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://coveralls.io/repos/github/leftstick/express-api-bootstrap/badge.svg?branch=master",alt:"Coverage Status"}}),a("OutboundLink")],1),t._v(" "),a("img",{attrs:{src:"https://david-dm.org/leftstick/express-api-bootstrap.png",alt:""}}),t._v(" "),a("img",{attrs:{src:"https://img.shields.io/npm/dt/express-api-bootstrap.svg",alt:""}}),t._v(" "),a("a",{attrs:{href:"https://github.com/prettier/prettier",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg",alt:"code style: prettier"}}),a("OutboundLink")],1),t._v(" "),a("img",{attrs:{src:"https://img.shields.io/github/license/leftstick/express-api-bootstrap",alt:""}})]),t._v(" "),a("p",[a("code",[t._v("express-api-bootstrap")]),t._v(" 受启发于"),a("a",{attrs:{href:"https://spring.io/projects/spring-boot/",target:"_blank",rel:"noopener noreferrer"}},[t._v("springboot"),a("OutboundLink")],1),t._v("，基于"),a("a",{attrs:{href:"https://expressjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("express"),a("OutboundLink")],1),t._v("实现。使开发 API service 更轻松。你要做的，就是关注业务，然后运行。剩下的，我们为您搞定")]),t._v(" "),a("h2",{attrs:{id:"快速开始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速开始"}},[t._v("#")]),t._v(" 快速开始")]),t._v(" "),a("p",[t._v("2分26秒创建你的第一个API服务")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/quickdemo.gif"),alt:"demo"}}),t._v(" "),a("h3",{attrs:{id:"环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[t._v("#")]),t._v(" 环境搭建")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建新项目目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" test-boot-app\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" test-boot-app\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 无交互模式生成一个基本的package.json")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" init -y\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 用 yarn 添加依赖")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" express-api-bootstrap\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 用 npm 添加依赖")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i express-api-bootstrap --save\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 初始化 express-api-bootstrap 所需环境")]),t._v("\nnpx boot init\n")])])]),a("p",[t._v("打开 "),a("code",[t._v("package.json")]),t._v("，添加/修改如下片段：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"start"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"boot dev"')]),t._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"build"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"boot build"')]),t._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"serve"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"boot serve"')]),t._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"boot test"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("创建文件： "),a("code",[t._v("src/controllers/helloController.ts")]),t._v("，编写如下内容：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" HttpRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" RestController"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" GetMapping "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'express-api-bootstrap'")]),t._v("\n\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("RestController")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloControler")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayHello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" HttpRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      say"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Hi, ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" HelloControler\n")])])]),a("p",[t._v("执行 "),a("code",[t._v("yarn start")]),t._v(" ，然后你的第一个 API "),a("a",{attrs:{href:"http://localhost:8080/apis/hello",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8080/apis/hello"),a("OutboundLink")],1),t._v(" 就完成了")]),t._v(" "),a("h2",{attrs:{id:"如何贡献？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何贡献？"}},[t._v("#")]),t._v(" 如何贡献？")]),t._v(" "),a("p",[t._v("看 "),a("a",{attrs:{href:"/zh/guide#contribute"}},[t._v("贡献代码")])]),t._v(" "),a("h2",{attrs:{id:"license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" LICENSE")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://raw.githubusercontent.com/leftstick/express-api-bootstrap/master/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[t._v("MIT License"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);