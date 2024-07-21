"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const common_1 = require("@nestjs/common");
const transform_interceptors_1 = require("./common/interceptors/transform.interceptors");
const base_exception_filter_1 = require("./common/exceptions/base.exception.filter");
const http_exception_filter_1 = require("./common/exceptions/http.exception.filter");
const doc_1 = require("./doc");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter());
    app.useGlobalInterceptors(new transform_interceptors_1.TransformInterceptor());
    const { httpAdapter } = app.get(core_1.HttpAdapterHost);
    app.useGlobalFilters(new base_exception_filter_1.AllExceptionsFilter(), new http_exception_filter_1.HttpExceptionFilter());
    app.enableVersioning({
        defaultVersion: [common_1.VERSION_NEUTRAL, '1'],
        type: common_1.VersioningType.URI,
    });
    (0, doc_1.generateDocument)(app);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map