"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoAuth = void 0;
const common_1 = require("@nestjs/common");
const NoAuth = () => (0, common_1.SetMetadata)('no-auth', true);
exports.NoAuth = NoAuth;
//# sourceMappingURL=NoAuth.guard.js.map