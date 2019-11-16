'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

function _interopNamespace(e) {
  if (e && e.__esModule) { return e; } else {
    var n = {};
    if (e) {
      Object.keys(e).forEach(function (k) {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      });
    }
    n['default'] = e;
    return n;
  }
}

var tslib = require('tslib');
var signale = _interopDefault(require('signale'));
var path = require('path');
var path__default = _interopDefault(path);
var glob = _interopDefault(require('glob'));
var express = _interopDefault(require('express'));
var os = _interopDefault(require('os'));
var typedi = require('typedi');

(function (PluginOrderEnum) {
    PluginOrderEnum["BEFORE_API_INIT"] = "BEFORE_API_INIT";
    PluginOrderEnum["API_INIT"] = "API_INIT";
    PluginOrderEnum["AFTER_API_INIT"] = "AFTER_API_INIT";
})(exports.PluginOrderEnum || (exports.PluginOrderEnum = {}));
var InternalPluginOrderEnum;
(function (InternalPluginOrderEnum) {
    InternalPluginOrderEnum["FIRST_STAGE"] = "FIRST_STAGE";
    InternalPluginOrderEnum["FINAL_STAGE"] = "FINAL_STAGE";
})(InternalPluginOrderEnum || (InternalPluginOrderEnum = {}));

function cwd() {
    return process.cwd();
}
function getProjectBaseRoot() {
    if (process.env.NODE_ENV === 'development') {
        return path.resolve(cwd(), 'src');
    }
    return path.resolve(cwd(), 'dist');
}

function isNotEmpty(obj) {
    return obj !== undefined && obj !== null;
}
function isEmpty(obj) {
    return obj === undefined || obj === null;
}
function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
}
function isArray(obj) {
    return isNotEmpty(obj) && Array.isArray(obj);
}

var cors = () => {
    return {
        namespace: 'cors',
        order: InternalPluginOrderEnum.FIRST_STAGE,
        configHandler(config) {
            if (isEmpty(config) || isEmpty(config.cors)) {
                return {
                    cors: true
                };
            }
            return {
                cors: config.cors
            };
        },
        pluginHandler(app, config) {
            app.use('*', (req, res, next) => {
                if (!req.get('Origin')) {
                    return next();
                }
                res.set('Access-Control-Allow-Origin', req.headers.origin);
                res.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PATCH, PUT, HEAD, TRACE, DELETE');
                res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Range');
                res.set('Access-Control-Allow-Credentials', 'true');
                if ('OPTIONS' === req.method) {
                    return res.status(200).end();
                }
                return next();
            });
        }
    };
};

const defaultSuccessResponseResolver = (data) => {
    return {
        code: 200,
        data
    };
};
const defaultFailureResponseResolver = (error) => {
    return {
        code: error.code,
        message: error.message || 'Internal error'
    };
};
var api = () => {
    return {
        namespace: 'api',
        order: exports.PluginOrderEnum.API_INIT,
        configHandler(config) {
            const conf = {
                api: {
                    scanDir: path.resolve(getProjectBaseRoot(), 'controllers'),
                    prefix: '/apis',
                    successResponseResolver: defaultSuccessResponseResolver,
                    failureResponseResolver: defaultFailureResponseResolver
                }
            };
            if (isEmpty(config) || isEmpty(config.api)) {
                return conf;
            }
            if (isNotEmpty(config.api.prefix) && isNotEmpty(conf.api)) {
                conf.api.prefix = config.api.prefix;
            }
            if (isNotEmpty(config.api.successResponseResolver) && isNotEmpty(conf.api)) {
                conf.api.successResponseResolver = config.api.successResponseResolver;
            }
            if (isNotEmpty(config.api.failureResponseResolver) && isNotEmpty(conf.api)) {
                conf.api.failureResponseResolver = config.api.failureResponseResolver;
            }
            return conf;
        },
        pluginHandler(app, config) {
            if (isEmpty(config.api)) {
                return;
            }
            const controllerFiles = glob.sync('**/*.ts', {
                cwd: config.api.scanDir,
                absolute: true
            });
            return Promise.all(controllerFiles.map(f => new Promise(function (resolve) { resolve(_interopNamespace(require(f))); })));
        }
    };
};

var server = () => {
    return {
        namespace: 'server',
        order: InternalPluginOrderEnum.FINAL_STAGE,
        configHandler(config) {
            if (isEmpty(config) || isEmpty(config.server)) {
                return {
                    server: {
                        port: 8080,
                        staticDir: path__default.resolve(cwd(), 'public')
                    }
                };
            }
            return {
                server: {
                    port: isEmpty(config.server.port) ? 8080 : config.server.port,
                    staticDir: isEmpty(config.server.staticDir) ? path__default.resolve(cwd(), 'public') : config.server.staticDir
                }
            };
        },
        pluginHandler(app, config) {
            if (isEmpty(config) ||
                isEmpty(config.server) ||
                isEmpty(config.server.port) ||
                isEmpty(config.server.staticDir)) {
                signale.error('No server config found');
                return;
            }
            const { port, staticDir } = config.server;
            if (isString(staticDir)) {
                app.use(express.static(staticDir));
            }
            return new Promise(resolve => {
                app.listen(port, '0.0.0.0', () => {
                    const addresses = getIpAddresses();
                    signale.success(`App running at below link${addresses.length > 1 ? 's' : ''}:`);
                    addresses.forEach(ip => {
                        signale.info(`http://${ip}:${port}`);
                        resolve();
                    });
                });
            });
        }
    };
};
function getIpAddresses() {
    const ifaces = os.networkInterfaces();
    return Object.values(ifaces)
        .reduce((p, c) => p.concat(c), [])
        .filter(iface => iface.family === 'IPv4')
        .map(iface => iface.address);
}

function getRawUserConfig() {
    try {
        // tslint:disable-next-line: non-literal-require
        const mod = require(path.join(cwd(), '.bootrc.ts'));
        return mod.default || mod;
    }
    catch (error) {
        signale.warn('.bootrc.ts not found, preset config used');
        return {};
    }
}

const rawConfig = getRawUserConfig();
const internalPlugins = [cors(), api(), server()];
function getExternalPlugins() {
    const factories = getExternalPluginFactories();
    return factories.map(factory => {
        return factory.module(factory.options);
    });
}
function getExternalPluginFactories() {
    if (!isArray(rawConfig.plugins)) {
        return [];
    }
    if (hasIncorrectPlugin(rawConfig.plugins)) {
        signale.error('incorrect plugin configured');
        // stop process
        return [];
    }
    return getExternalPluginModules(rawConfig.plugins);
}
function hasIncorrectPlugin(plugins) {
    return plugins.some(plugin => isEmpty(plugin) || isEmpty(plugin.name));
}
function getExternalPluginModules(plugins) {
    const modulePaths = [
        ...plugins.map(plugin => ({ mp: path.join(cwd(), plugin.name), options: plugin.options })),
        ...plugins.map(plugin => ({ mp: path.join(cwd(), 'node_modules', plugin.name), options: plugin.options }))
    ];
    return modulePaths
        .map(mp => {
        try {
            // tslint:disable-next-line: non-literal-require
            const mod = require(mp.mp);
            return {
                module: mod.default || mod,
                options: mp.options
            };
        }
        catch (error) {
            return null;
        }
    })
        .filter((mod) => !!mod);
}
const plugins = [...internalPlugins, ...getExternalPlugins()];
const userConfig = plugins.reduce((p, c) => {
    return Object.assign(Object.assign({}, p), c.configHandler(p));
}, Object.assign({}, rawConfig));
function execPlugins(order, app) {
    return tslib.__awaiter(this, void 0, void 0, function* () {
        const getPlugins = plugins.filter(p => p.order === order);
        yield Promise.all(getPlugins.map(p => p.pluginHandler(app, Object.assign({}, userConfig)) || Promise.resolve()));
        return undefined;
    });
}
const pluginRunner = {
    firstStage(app) {
        return tslib.__awaiter(this, void 0, void 0, function* () {
            return execPlugins(InternalPluginOrderEnum.FIRST_STAGE, app);
        });
    },
    beforeApiInit(app) {
        return tslib.__awaiter(this, void 0, void 0, function* () {
            return execPlugins(exports.PluginOrderEnum.BEFORE_API_INIT, app);
        });
    },
    apiInit(app) {
        return tslib.__awaiter(this, void 0, void 0, function* () {
            return execPlugins(exports.PluginOrderEnum.API_INIT, app);
        });
    },
    afterApiInit(app) {
        return tslib.__awaiter(this, void 0, void 0, function* () {
            return execPlugins(exports.PluginOrderEnum.AFTER_API_INIT, app);
        });
    },
    lastStage(app) {
        return tslib.__awaiter(this, void 0, void 0, function* () {
            return execPlugins(InternalPluginOrderEnum.FINAL_STAGE, app);
        });
    }
};

const PATH_SETS = {
    get: new Set(),
    post: new Set(),
    delete: new Set(),
    update: new Set(),
    patch: new Set()
};
const ExpressToken = new typedi.Token('global.express');
const RestControllerToken = new typedi.Token('controllers');
function setExpressApp(app) {
    typedi.Container.set(ExpressToken, app);
}
function RestController() {
    return (target) => {
        return typedi.Service({ id: RestControllerToken, multiple: true })(target);
    };
}
function GetMapping(path) {
    return execMapping(path, 'get');
}
function PostMapping(path) {
    return execMapping(path, 'post');
}
function DeleteMapping(path) {
    return execMapping(path, 'delete');
}
function UpdateMapping(path) {
    return execMapping(path, 'update');
}
function PatchMapping(path) {
    return execMapping(path, 'patch');
}
function execMapping(path, httpMethod) {
    return (target, propertyKey, descriptor) => {
        if (PATH_SETS[httpMethod].has(path)) {
            signale.error(`${httpMethod} ${path} was registered multiple times, please verify your code first`);
        }
        const app = typedi.Container.get(ExpressToken);
        app[httpMethod](path, (req, res) => tslib.__awaiter(this, void 0, void 0, function* () {
            const { successResponseResolver, failureResponseResolver } = userConfig.api;
            try {
                const result = yield target[propertyKey](req, res);
                res.json(successResponseResolver(result));
            }
            catch (error) {
                res.json(failureResponseResolver(error));
            }
        }));
    };
}

const ___internal = {
    pluginRunner,
    setExpressApp,
    ExpressToken
};

exports.DeleteMapping = DeleteMapping;
exports.GetMapping = GetMapping;
exports.PatchMapping = PatchMapping;
exports.PostMapping = PostMapping;
exports.RestController = RestController;
exports.UpdateMapping = UpdateMapping;
exports.___internal = ___internal;
exports.setExpressApp = setExpressApp;
