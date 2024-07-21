import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { VERSION_NEUTRAL, VersioningType } from '@nestjs/common';
import { TransformInterceptor } from './common/interceptors/transform.interceptors';
import { AllExceptionsFilter } from './common/exceptions/base.exception.filter';
import { HttpExceptionFilter } from './common/exceptions/http.exception.filter';
import { generateDocument } from './doc';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter());

  // 使用全局拦截器
  app.useGlobalInterceptors(new TransformInterceptor());

  const { httpAdapter } = app.get(HttpAdapterHost);
  // 使用全局过滤器
  app.useGlobalFilters(new AllExceptionsFilter(), new HttpExceptionFilter());

  // 启用版本控制
  app.enableVersioning({
    defaultVersion: [VERSION_NEUTRAL, '1'],
    type: VersioningType.URI,
  });

  // 生成文档
  generateDocument(app);

  // 监听端口
  await app.listen(3000);
}
bootstrap();
