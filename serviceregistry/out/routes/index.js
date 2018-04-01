"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var registry_1 = require("../registry/registry");
var index = express_1.Router();
var registry = new registry_1.Registry();
/* GET home page. */
index.get("/", function (req, res, next) {
    res.send(Array.from(registry.Entries.values()));
});
index.post("/", function (req, res, next) {
    var entry = req.body;
    var key = entry.serviceName + ":" + entry.instanceId;
    var map = registry.Entries;
    map.set(key, entry);
    res.status(200).send(entry);
});
exports.default = index;
//# sourceMappingURL=index.js.map