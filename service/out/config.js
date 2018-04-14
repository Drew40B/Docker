"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config = /** @class */ (function () {
    function Config() {
        this.Delay = process.env.Delay || 5 * 1000;
        this.Alternate = process.env.Alternate || true;
        this.Url = process.env.URL || "http://192.168.99.100:4000/";
    }
    return Config;
}());
exports.default = Config;
//# sourceMappingURL=config.js.map