"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumToArray = void 0;
const StringIsNumber = value => isNaN(Number(value)) === true;
function EnumToArray(enumme) {
    return Object.keys(enumme)
        .filter(StringIsNumber)
        .map(key => enumme[key]);
}
exports.EnumToArray = EnumToArray;
//# sourceMappingURL=enumNumberToArray.js.map