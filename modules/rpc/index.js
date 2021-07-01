/**
 * @file modules/rpc/index.js
 * @project node-service
 * @author Александр
 */

var express = require('express');
var router = express.Router();

var authUtil = require('../authorize/util');
var shellContext = require('../custom-context/shell');
var settingContext = require('../custom-context/setting');
var userContext = require('../custom-context/user');
var changePasswordRouter = require('./router/changePassword');
var rpcRouter = require('./router/rpc');
var cacheRouter = require('./router/cache');
var rpcInjection = require('../rpc-injection');
var rpcQuery = require('./modules/rpc-query');
var db = require('../dbcontext');

/**
 * инициализация модуля для работы с RPC
 * @param {string} auth_type тип авторизации. По умолчанию basic
 */
module.exports = function (auth_type) {
    var contexts = [];

    // добавляем injection
    rpcInjection.add('accesses', require('../injections/accesses').reload);

    contexts.push(shellContext);
    contexts.push(userContext);
    contexts.push(settingContext);

    rpcQuery.registryContext(db);
    rpcQuery.registryContext(contexts);

    router.use(cacheRouter());
    router.use(changePasswordRouter(auth_type));

    router.use(rpcRouter(auth_type));

    var authType = authUtil.getAuthModule(auth_type);
    router.post('/auth', authType.authorize);

    return router;
}