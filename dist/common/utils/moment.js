"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToday = void 0;
const moment = require("moment-timezone");
const getToday = () => {
    const DATE = new Date();
    moment.locale("ko");
    return moment(DATE).tz("Asia/Seoul").format("MMMM Do YYYY, h:mm:ss a");
};
exports.getToday = getToday;
//# sourceMappingURL=moment.js.map