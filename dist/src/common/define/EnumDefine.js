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
    JWTType["ACCESS"] = "SECRET_KEY";
    JWTType["REGISTER"] = "REGISTER_KEY";
})(JWTType || (JWTType = {}));
exports.JWTType = JWTType;
//# sourceMappingURL=EnumDefine.js.map