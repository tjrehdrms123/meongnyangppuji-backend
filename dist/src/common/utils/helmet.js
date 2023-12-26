"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupHelmet = void 0;
const helmet_1 = require("helmet");
function setupHelmet(server) {
    server.use(helmet_1.default.contentSecurityPolicy());
    server.use(helmet_1.default.crossOriginEmbedderPolicy());
    server.use(helmet_1.default.crossOriginOpenerPolicy());
    server.use(helmet_1.default.crossOriginResourcePolicy());
    server.use(helmet_1.default.dnsPrefetchControl());
    server.use(helmet_1.default.frameguard());
    server.use(helmet_1.default.hidePoweredBy());
    server.use(helmet_1.default.hsts());
    server.use(helmet_1.default.ieNoOpen());
    server.use(helmet_1.default.noSniff());
    server.use(helmet_1.default.originAgentCluster());
    server.use(helmet_1.default.permittedCrossDomainPolicies());
    server.use(helmet_1.default.referrerPolicy());
    server.use(helmet_1.default.xssFilter());
}
exports.setupHelmet = setupHelmet;
//# sourceMappingURL=helmet.js.map