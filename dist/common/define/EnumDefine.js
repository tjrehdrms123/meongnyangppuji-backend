"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTType = exports.Role = void 0;
var Role;
(function (Role) {
    Role["User"] = "User";
    Role["Admin"] = "Admin";
})(Role || (Role = {}));
exports.Role = Role;
var JWTType;
(function (JWTType) {
    JWTType["ACCESS"] = "ACCESS_SECRET";
    JWTType["REGISTER"] = "REGISTER_SECRET";
})(JWTType || (JWTType = {}));
exports.JWTType = JWTType;
//# sourceMappingURL=EnumDefine.js.map