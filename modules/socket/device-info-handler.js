/**
 * @file modules/socket/device-info-handler.js
 * @project node-service
 * @author Александр
 * @todo Обработчик информации об устройстве пользователя
 */
var logjs = require('../log');
var mailer = require('./mailer');

/**
 * обработчик информации об устройстве по WebSocket
 * @param {any} req - эмулирование request
 * @param {any} res - эмулирование response
 * @param {any} socket
 * @example
 * // socket.on('deviceinfo', ...)
 */
module.exports = function (in_req, in_res, socket) {
    return function (buffer) {
        var res = Object.assign({}, in_res);
        var req = Object.assign({}, in_req);
        req.socket = socket;
        mailer.to(req, res, buffer);
        
        logjs.debug('Получена информация от пользователя ' + res.user.c_login + ' об устройстве мобильного телефона.');
    }
}