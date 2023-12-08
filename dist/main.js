"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const expressBasicAuth = require("express-basic-auth");
const cookieParser = require("cookie-parser");
const http_api_exception_filter_1 = require("./common/exceptions/http-api-exception.filter");
const expressSession = require("express-session");
const swagger_1 = require("./common/utils/swagger");
const success_interceptor_1 = require("./common/exceptions/success.interceptor");
const helmet_1 = require("./common/utils/helmet");
class Application {
    constructor(server) {
        this.server = server;
        this.logger = new common_1.Logger(Application.name);
        this.server = server;
        if (!process.env.SECRET_KEY)
            this.logger.error('Set "SECRET" env');
        this.DEV_MODE = process.env.NODE_ENV === 'production' ? false : true;
        this.PORT = process.env.PORT || '5000';
        this.corsOriginList = process.env.CORS_ORIGIN_LIST
            ? process.env.CORS_ORIGIN_LIST.split(',').map((origin) => origin.trim())
            : ['*'];
        this.ADMIN_USER = process.env.ADMIN_USER || 'admin';
        this.ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '1234';
        this.SESSION_SECRET_KEY =
            process.env.SESSION_SECRET_KEY || 'SESSION_SECRET_KEY';
    }
    setUpBasicAuth() {
        this.server.use(['/docs', '/docs-json'], expressBasicAuth({
            challenge: true,
            users: {
                [this.ADMIN_USER]: this.ADMIN_PASSWORD,
            },
        }));
    }
    async setUpGlobalMiddleware() {
        this.server.enableCors({
            origin: this.corsOriginList,
            credentials: true,
        });
        this.server.use(cookieParser());
        this.setUpBasicAuth();
        this.server.useGlobalPipes(new common_1.ValidationPipe({
            transform: true,
            exceptionFactory: (errors) => {
                const validationErrors = {};
                errors.forEach(error => {
                    const constraints = error.constraints;
                    if (constraints) {
                        validationErrors[error.property] = Object.values(constraints);
                    }
                });
                return new common_1.BadRequestException(validationErrors);
            },
        }));
        this.server.use(expressSession({
            secret: this.SESSION_SECRET_KEY,
            resave: true,
            saveUninitialized: true,
        }));
        this.server.useGlobalInterceptors(new success_interceptor_1.SuccessInterceptor());
        this.server.useGlobalFilters(new http_api_exception_filter_1.HttpApiExceptionFilter());
    }
    async bootstrap() {
        await this.setUpGlobalMiddleware();
        await this.server.listen(this.PORT);
    }
    startLog() {
        if (this.DEV_MODE) {
            this.logger.log(`✅ Server on http://localhost:${this.PORT}`);
        }
        else {
            this.logger.log(`✅ Server on port ${this.PORT}...`);
        }
    }
    errorLog(error) {
        this.logger.error(`🆘 Server error ${error}`);
    }
}
async function init() {
    const server = await core_1.NestFactory.create(app_module_1.AppModule);
    const app = new Application(server);
    (0, helmet_1.setupHelmet)(server);
    (0, swagger_1.setupSwagger)(server);
    await app.bootstrap();
    app.startLog();
}
init().catch((error) => {
    new common_1.Logger('init').error(error);
});
//# sourceMappingURL=main.js.map