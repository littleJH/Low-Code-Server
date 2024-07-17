import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';

/**
 * 捕获 HttpException 异常
 */
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  /**
   * 捕获异常
   */
  catch(exception: HttpException, host: ArgumentsHost) {
    // 获取上下文
    const ctx = host.switchToHttp();
    // 获取响应
    const response = ctx.getResponse();
    // 获取请求
    const request = ctx.getRequest();
    // 获取状态码
    const status = exception.getStatus();

    // 设置响应状态码
    response.status(status).json({
      // 状态码
      statusCode: status,
      // 时间戳
      timestamp: new Date().toISOString(),
      // 路径
      path: request.url,
      // 消息
      message: exception.getResponse(),
    });
  }
}
