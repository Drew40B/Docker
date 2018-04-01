"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StatusEnum;
(function (StatusEnum) {
    StatusEnum[StatusEnum["Red"] = 3] = "Red";
    StatusEnum[StatusEnum["Yellow"] = 2] = "Yellow";
    StatusEnum[StatusEnum["Green"] = 1] = "Green";
})(StatusEnum = exports.StatusEnum || (exports.StatusEnum = {}));
var RegistryEntry = /** @class */ (function () {
    function RegistryEntry() {
    }
    RegistryEntry.prototype.createKey = function () {
        return this.serviceName + ":" + this.instanceId;
    };
    return RegistryEntry;
}());
exports.RegistryEntry = RegistryEntry;
//# sourceMappingURL=registryEntry.js.map