import { Global, Module } from '@nestjs/common'; // 从 NestJS 导入 Global 和 Module 装饰器
import { DatabaseProviders } from './database.providers'; // 导入数据库提供者配置

// 使用 @Global 装饰器将模块标记为全局模块
@Global()
@Module({
  providers: [...DatabaseProviders], // 将数据库提供者注册为模块的提供者
  exports: [...DatabaseProviders], // 导出数据库提供者，以便在其他模块中使用
})
export class DatabaseModule {} // 定义 DatabaseModule 模块
