"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = void 0;
const swagger_1 = require("@nestjs/swagger");
function setupSwagger(server) {
    const options = new swagger_1.DocumentBuilder()
        .setTitle('멍냥뿌지 - API')
        .setDescription('BackEnd API DOCS')
        .setVersion('0.0.1')
        .addServer(process.env.DOMAIN_PRODUCTION, 'Production Server')
        .addServer(process.env.DOMAIN_LOCAL, 'Local Server')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(server, options);
    swagger_1.SwaggerModule.setup('docs', server, document, {
        swaggerOptions: {
            servers: [
                { url: process.env.DOMAIN_PRODUCTION, description: 'Production Server' },
                { url: process.env.DOMAIN_LOCAL, description: 'Local Server' },
            ],
        },
    });
}
exports.setupSwagger = setupSwagger;
//# sourceMappingURL=swagger.js.map