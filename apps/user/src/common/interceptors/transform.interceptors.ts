import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// 全局统一返回格式
@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    // 返回一个Observable，将返回的数据格式统一转换为指定的格式
    return next.handle().pipe(
      map((data) => ({
        // 数据
        data,
        // 状态码
        status: 0,
        // 扩展信息
        extra: {},
        // 消息
        message: 'success',
        // 是否成功
        success: true,
      })),
    );
  }
}
