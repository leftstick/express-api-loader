(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{234:function(t,s,a){"use strict";a.r(s);var e=a(3),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"内置配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内置配置"}},[t._v("#")]),t._v(" 内置配置")]),t._v(" "),a("h2",{attrs:{id:"server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server"}},[t._v("#")]),t._v(" server")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("IServerConfig")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("{ port: 8080, staticDir: join(process.cwd(), 'public'), trustProxy: false }")])])]),t._v(" "),a("p",[a("code",[t._v("express")]),t._v(" 服务的配置项：")]),t._v(" "),a("p",[t._v("例子:")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" join "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" IBootConfig "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'express-api-bootstrap/types'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IBootConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    staticDir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'static'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    trustProxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"cors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cors"}},[t._v("#")]),t._v(" cors")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("boolean")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("true")])])]),t._v(" "),a("p",[t._v("是否开启跨域")]),t._v(" "),a("p",[t._v("例子:")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" IBootConfig "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'express-api-bootstrap/types'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IBootConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  cors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"requestparser"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requestparser"}},[t._v("#")]),t._v(" requestParser")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("IRequestParserConfig | false")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("{ config(app, parsers) {app.use(parsers.bodyParser.json());app.use(parsers.cookieParser());} }")])])]),t._v(" "),a("p",[t._v("是否启用 requestParser 功能")]),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Express"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" IParsers "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'express-api-bootstrap'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" IBootConfig "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'express-api-bootstrap/types'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IBootConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  requestParser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Express"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" parsers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" IParsers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parsers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bodyParser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parsers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cookieParser")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" api")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("IApiConfig")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("{ scanDir: 'src/controllers', prefix: '/apis', successResponseResolver: (data) => ({ code: 200, data }), defaultFailureResponseResolver: (error: BizError) => ({ code: error.code, message: error.message || 'Internal error' }), rateLimit: false }")])])]),t._v(" "),a("p",[a("code",[t._v("controllers")]),t._v(" 的扫描、注册、管理配置")]),t._v(" "),a("p",[t._v("举例:")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" join "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" BizError "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'express-api-bootstrap'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" IBootConfig "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'express-api-bootstrap/types'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IBootConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    scanDir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cwd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'controllers'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    prefix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/apis'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("successResponseResolver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("failureResponseResolver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" BizError")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Internal error'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"api-ratelimit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-ratelimit"}},[t._v("#")]),t._v(" api.rateLimit")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("IRateLimitConfig | false")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("false")])])]),t._v(" "),a("p",[t._v("直传给"),a("a",{attrs:{href:"https://github.com/nfriedly/express-rate-limit",target:"_blank",rel:"noopener noreferrer"}},[t._v("express-rate-limit"),a("OutboundLink")],1),t._v("。 默认为 "),a("code",[t._v("false")]),t._v("。")]),t._v(" "),a("p",[t._v("你可以通过传入 "),a("code",[t._v("IRateLimitConfig")]),t._v(" 属性来激活 "),a("code",[t._v("api")]),t._v(" 限流功能")]),t._v(" "),a("p",[a("strong",[t._v("api.rateLimit.max")])]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("number")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("5")])])]),t._v(" "),a("p",[t._v("指定时间范围 "),a("code",[t._v("windowMs")]),t._v(" 内最大能处理的请求书，超过限制则框架直接返回 "),a("code",[t._v("429")]),t._v(" 状态码。")]),t._v(" "),a("p",[t._v("默认值为 "),a("code",[t._v("5")]),t._v("。 设置为 "),a("code",[t._v("0")]),t._v(" 可以禁用限制")]),t._v(" "),a("p",[a("strong",[t._v("api.rateLimit.windowMs")])]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("number")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("60000")])])]),t._v(" "),a("p",[t._v("限流时间窗口。配合 "),a("code",[t._v("max")]),t._v(" 表达 "),a("code",[t._v("windowMs")]),t._v(" 之内最大允许框架处理 "),a("code",[t._v("max")]),t._v(" 个请求，时间范围 "),a("code",[t._v("windowMs")]),t._v(" 超过 "),a("code",[t._v("max")]),t._v(" 的请求则会直接返回 "),a("code",[t._v("429")]),t._v(" 状态码。")]),t._v(" "),a("p",[t._v("默认值为 "),a("code",[t._v("60000")]),t._v(" (1 分钟)。")]),t._v(" "),a("p",[a("strong",[t._v("api.rateLimit.message")])]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("Too many requests, please try again later")])])]),t._v(" "),a("p",[t._v("配合 "),a("code",[t._v("max")]),t._v(" 使用，超过阈值的请求除了 "),a("code",[t._v("429")]),t._v(" 状态码，还有这个 "),a("code",[t._v("message")]),t._v(" 字段。")]),t._v(" "),a("p",[t._v("默认值为： "),a("code",[t._v("Too many requests, please try again later.")])]),t._v(" "),a("p",[a("strong",[t._v("api.rateLimit.statusCode")])]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("number")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("429")])])]),t._v(" "),a("p",[t._v("超过阈值时的状态码。")]),t._v(" "),a("p",[t._v("默认值为： "),a("code",[t._v("429")]),t._v("。")]),t._v(" "),a("p",[a("strong",[t._v("api.rateLimit.headers")])]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("boolean")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("false")])])]),t._v(" "),a("p",[t._v("是否在 "),a("code",[t._v("response")]),t._v(" 中加入 limit header，(X-RateLimit-Limit) 和 (X-RateLimit-Remaining)。")]),t._v(" "),a("p",[t._v("默认值为： "),a("code",[t._v("false")]),t._v("。")]),t._v(" "),a("p",[a("strong",[t._v("api.rateLimit.keyGenerator")])]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("(req: express.Request, res: express.Response) => string")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("(req: express.Request, res: express.Response) => req.ip + req.originalUrl")])])]),t._v(" "),a("p",[t._v("API 标识生成器。用于定义/鉴别请求是否同一个来源。")]),t._v(" "),a("p",[t._v("默认值为： "),a("code",[t._v("req.ip + req.originalUrl")])]),t._v(" "),a("p",[a("strong",[t._v("api.rateLimit.skip")])]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("(req: express.Request, res: express.Response) => boolean")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("(req: express.Request, res: express.Response) => false")])])]),t._v(" "),a("p",[t._v("API 限流白名单，通过此方法，你可以让指定 API 调过限流控制。")]),t._v(" "),a("p",[t._v("默认值为："),a("code",[t._v("false")]),t._v(" (所有请求都会进入限流)。")]),t._v(" "),a("p",[a("strong",[t._v("api.rateLimit.store")])]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("rateLimit.Store")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("MemoryStore")])])]),t._v(" "),a("p",[t._v("存储器。用来保存请求信息。")]),t._v(" "),a("p",[t._v("默认值为： "),a("code",[t._v("MemoryStore")]),t._v("。")]),t._v(" "),a("p",[t._v("以下是其他可选外部存储器:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("MemoryStore")]),t._v(": (默认值) 简单实现。不能在分布式架构里使用。")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/wyattjoh/rate-limit-redis",target:"_blank",rel:"noopener noreferrer"}},[t._v("rate-limit-redis"),a("OutboundLink")],1),t._v(": 基于 "),a("code",[t._v("redis")]),t._v(" 的存储器")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/linyows/rate-limit-memcached",target:"_blank",rel:"noopener noreferrer"}},[t._v("rate-limit-memcached"),a("OutboundLink")],1),t._v(": 基于 "),a("code",[t._v("memcached")]),t._v(" 的存储器")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/2do2go/rate-limit-mongo",target:"_blank",rel:"noopener noreferrer"}},[t._v("rate-limit-mongo"),a("OutboundLink")],1),t._v(": 基于 "),a("code",[t._v("mongoDB")]),t._v(" 的存储器")])])])}),[],!1,null,null,null);s.default=r.exports}}]);