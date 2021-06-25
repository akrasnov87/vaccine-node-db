/**
 * @file router/upload.js
 * @project simple-rpc
 * @author Александр
 * @todo проверка для доступности сервера
 */

var express = require("express");
var router = express.Router();
var db = require('../modules/dbcontext');

module.exports = function () {
    router.get("/file", function (req, res) {
        var id = req.query.id;
        var type = req.query.type;
        var filters = [{ property: "id", operator: "=", value: id }];

        db.provider.select('core', 'dd_files', { limit: 1, select: 'id, ba_' + type, filter: filters }, null, function (data) {
            if (data.meta.success && data.result.records.length > 0) {
                res.setHeader('Content-Disposition', 'attachment; filename=' + id + '.' + type);
                res.setHeader("Content-Type", type == "jpg" ? 'image/jpeg' : 'application/pdf');
                res.send(data.result.records[0]["ba_" + type]);
            } else {
                res.send(data.meta.msg);
            }
        });
    });

    router.post("/file", function (req, res) {
        var id = req.query.id;
        var files = req.files;

        var obj = { id: id }
        if (files["jpg"]) {
            obj["ba_jpg"] = files["jpg"].data
        }
        if (files["pdf"]) {
            obj["ba_pdf"] = files["pdf"].data
        }

        db.provider.insertOrUpdate('core', 'dd_files', 'id', obj, function (data) {
            if (data.meta.success) {
                res.send("SUCCESS");
            } else {
                res.send(data.meta.msg);
            }
        });
    });

    return router;
}