import { parse } from 'yaml';
import * as path from 'path';
import * as fs from 'fs';

// 获取当前运行环境
export const getEnv = () => {
  return process.env.RUNNING_ENV;
};

// 导出获取配置的方法
export const getConfig = () => {
  // 获取当前运行环境
  const environment = getEnv();
  // 获取配置文件的路径
  const yamlPath = path.join(process.cwd(), `./.config/.${environment}.yaml`);
  // 读取配置文件
  const file = fs.readFileSync(yamlPath, 'utf8');
  // 将配置文件解析为JSON对象
  const config = parse(file);
  // 返回配置对象
  return config;
};
