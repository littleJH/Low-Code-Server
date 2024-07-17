import { Controller, Get, Version } from '@nestjs/common'; // 导入@nestjs/common中的Controller、Get和Version
import { AppService } from './app.service'; // 导入app.service
import { ConfigService } from '@nestjs/config'; // 导入@nestjs/config中的ConfigService

@Controller() // 定义控制器
export class AppController {
  constructor(
    private readonly appService: AppService, // 声明appService属性
    private readonly configService: ConfigService, // 声明configService属性
  ) {}

  @Get('getHello') // 定义GET请求
  @Version('1') // 定义版本号
  getHello(): string {
    return this.appService.getHello(); // 调用appService中的getHello方法
  }

  @Get('getTestName') // 定义GET请求
  @Version('1') // 定义版本号
  getTestName(): string {
    return this.configService.get('TEST_VALUE').name; // 调用configService中的get方法，获取TEST_NAME配置项中的name属性
  }
}
