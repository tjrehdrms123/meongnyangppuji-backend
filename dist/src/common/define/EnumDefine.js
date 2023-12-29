"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortType = exports.JWTType = exports.Role = void 0;
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
var SortType;
(function (SortType) {
    SortType["ASC"] = "ASC";
    SortType["DESC"] = "DESC";
})(SortType || (SortType = {}));
exports.SortType = SortType;
//# sourceMappingURL=EnumDefine.js.map