var args = require('args-parser')(process.argv);
var conf = require('node-config')(__dirname, '../');

/**
 * Получение текущего хоста
 * @returns {string}
 */
exports.getCurrentHost = getCurrentHost;

function getCurrentHost() {
    return 'localhost:' + args.port;
}

/**
 * Получение виртуального каталога
 * @returns {string}
 */
exports.getVirtualDirPath = function () {
    return args.virtual_dir_path || conf.get('virtual_dir_path');
}

/**
 * Строка подключения к БД
 * @returns {string}
 */
exports.getConnectionString = function () {
    return args.connection_string || conf.get('connectionString');
}