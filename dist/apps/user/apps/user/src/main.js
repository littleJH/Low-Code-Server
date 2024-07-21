"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const transform_interceptors_1 = require("./common/interceptors/transform.interceptors");
const base_exception_filter_1 = require("./common/exceptions/base.exception.filter");
const http_exception_filter_1 = require("./common/exceptions/http.exception.filter");
const doc_1 = require("./doc");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalInterceptors(new transform_interceptors_1.TransformInterceptor());
    const { httpAdapter } = app.get(core_1.HttpAdapterHost);
    app.useGlobalFilters(new base_exception_filter_1.AllExceptionsFilter(), new http_exception_filter_1.HttpExceptionFilter());
    (0, doc_1.generateDocument)(app);
    await app.listen(4000);
}
bootstrap();
//# sourceMappingURL=main.js.map