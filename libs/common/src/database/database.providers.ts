import { DataSource } from 'typeorm'; // 导入 TypeORM 的 DataSource 类

import { getConfig } from '../utils/index'; // 导入获取配置的函数
import { NamingStrategy } from './naming.strategies'; // 导入自定义命名策略

// 从配置文件中获取 MongoDB 和 MySQL 的配置
const { MONGODB_CONFIG, MYSQL_CONFIG } = getConfig();

// 配置 MongoDB 数据库连接信息
const MONGODB_DATABASE_CONFIG = {
  ...MONGODB_CONFIG, // 展开 MongoDB 的配置
  entities: [`dist/**/*.${MONGODB_CONFIG.entities}.entity.js`], // 设置实体文件路径
};

// 配置 MySQL 数据库连接信息
const MYSQL_DATABASE_CONFIG = {
  ...MYSQL_CONFIG, // 展开 MySQL 的配置
  namingStrategy: new NamingStrategy(), // 使用自定义命名策略
  entities: [`dist/**/*.${MYSQL_CONFIG.entities}.entity.js`], // 设置实体文件路径
};

// console.log('🚀 ~ MONGODB_DATABASE_CONFIG:', MONGODB_DATABASE_CONFIG);
// console.log('🚀 ~ MYSQL_DATABASE_CONFIG:', MYSQL_DATABASE_CONFIG);

// 创建 MongoDB 数据源实例
const MONGODB_DATA_SOURCE = new DataSource(MONGODB_DATABASE_CONFIG);
// 创建 MySQL 数据源实例
const MYSQL_DATA_SOURCE = new DataSource(MYSQL_DATABASE_CONFIG);

// 数据库注入配置
export const DatabaseProviders = [
  {
    provide: 'MONGODB_DATA_SOURCE', // 提供 MongoDB 数据源
    useFactory: async () => {
      // 如果 MongoDB 数据源未初始化，则初始化它
      if (!MONGODB_DATA_SOURCE.isInitialized)
        await MONGODB_DATA_SOURCE.initialize();
      return MONGODB_DATA_SOURCE; // 返回初始化后的 MongoDB 数据源
    },
  },
  {
    provide: 'MYSQL_DATA_SOURCE', // 提供 MySQL 数据源
    useFactory: async () => {
      // 如果 MySQL 数据源未初始化，则初始化它
      if (!MYSQL_DATA_SOURCE.isInitialized)
        await MYSQL_DATA_SOURCE.initialize();
      return MYSQL_DATA_SOURCE; // 返回初始化后的 MySQL 数据源
    },
  },
];
