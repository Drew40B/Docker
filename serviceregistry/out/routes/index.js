"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var registry_1 = require("../registry/registry");
var index = express_1.Router();
var registry = new registry_1.Registry();
/* GET home page. */
index.get('/', function (req, res, next) {
    // res.render('index', { title: 'Visual Studio Code!' });
    res.send(registry);
});
index.post('/', function (req, res, next) {
    var entry = req.body;
    registry.Entries.push(entry);
    res.status(200).send("OK");
});
exports.default = index;
//# sourceMappingURL=index.js.map