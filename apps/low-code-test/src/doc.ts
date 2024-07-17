import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as packageConfig from '../package.json'; // 引入 package.json 文件

// 导出一个函数，用于生成文档
export const generateDocument = (app) => {
  // 创建 DocumentBuilder 实例
  const options = new DocumentBuilder()
    // 设置文档标题
    .setTitle(packageConfig.name)
    // 设置文档描述
    .setDescription(packageConfig.description)
    // 设置文档版本
    .setVersion(packageConfig.version)
    // 构建文档配置
    .build();

  // 根据 app 和 options 创建文档
  const document = SwaggerModule.createDocument(app, options);

  // 将文档设置到 '/api/doc' 路径下
  SwaggerModule.setup('/api/doc', app, document);
};
