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
        var filters = [{ property: "f_document", operator: "=", value: id }];
        if (type != '') {
            filters.push({ property: 'c_type', operator: "=", value: type });
        } else {
            filters.push({ property: 'c_type', operator: "<>", value: 'sert' });
        }
        var sort = [{ property: "dx_created", direction: "DESC" }];

        db.provider.select('core', 'dd_files', { limit: 1, select: 'id, ba_data, c_type', filter: filters, sort: sort }, null, function (data) {
            if (data.meta.success && data.result.records.length > 0) {
                type = data.result.records[0].c_type;
                if (type != 'sert') {
                    res.setHeader('Content-Disposition', 'attachment; filename=' + id + '.jpg');
                }
                res.setHeader("Content-Type", type != "sert" ? 'image/jpeg' : 'application/pdf');
                res.send(data.result.records[0]["ba_data"]);
            } else {
                res.send(data.meta.msg);
            }
        });
    });

    router.get("/filebyid", function (req, res) {
        var id = req.query.id;
        var filters = [{ property: "id", operator: "=", value: id }];

        db.provider.select('core', 'dd_files', { select: 'id, ba_data, c_type', filter: filters }, null, function (data) {
            if (data.meta.success && data.result.records.length > 0) {
                var type = data.result.records[0].c_type;
                if (type != 'sert') {
                    res.setHeader('Content-Disposition', 'attachment; filename=' + id + '.jpg');
                }
                res.setHeader("Content-Type", type != "sert" ? 'image/jpeg' : 'application/pdf');
                if (data.result.records[0]["ba_data"]) {
                    res.send(data.result.records[0]["ba_data"]);
                } else {
                    res.send(data.meta.msg);
                }
            } else {
                res.send(data.meta.msg);
            }
        });
    });

    router.get("/filebydel", function (req, res) {
        var id = req.query.id;

        db.provider.insertOrUpdate('core', 'dd_files', 'id', { id: id, sn_delete: true }, function (data) {
            if (data.meta.success) {
                res.send("SUCCESS");
            } else {
                res.send(data.meta.msg);
            }
        });
    });

    router.post("/file", function (req, res) {
        var id = req.query.id;
        var d_date = req.query.d_date;
        var c_type = req.query.c_type;
        var files = req.files;

        var obj = { f_document: id, d_date: d_date, c_type: c_type };
        if (files["data"]) {
            obj["ba_data"] = files["data"].data
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