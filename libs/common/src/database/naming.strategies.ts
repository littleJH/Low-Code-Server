/*
 * @Author: Cookie
 * @Description: 添加数据库表与字段驼峰转下划线功能
 */

import { DefaultNamingStrategy, NamingStrategyInterface } from 'typeorm'; // 导入 TypeORM 的默认命名策略和命名策略接口
import { snakeCase } from 'typeorm/util/StringUtils'; // 导入将字符串转换为下划线格式的工具函数

// 定义自定义命名策略类，继承自 TypeORM 的默认命名策略并实现命名策略接口
export class NamingStrategy
  extends DefaultNamingStrategy
  implements NamingStrategyInterface
{
  // 重写 tableName 方法，生成表名时将类名转换为下划线格式
  tableName(className: string, customName: string): string {
    return customName ? customName : snakeCase(className);
  }

  // 重写 columnName 方法，生成列名时将属性名转换为下划线格式
  columnName(
    propertyName: string,
    customName: string,
    embeddedPrefixes: string[],
  ): string {
    return (
      snakeCase(embeddedPrefixes.concat('').join('_')) + // 将嵌入前缀转换为下划线格式
      (customName ? customName : snakeCase(propertyName)) // 将属性名转换为下划线格式
    );
  }

  // 重写 relationName 方法，生成关系名时将属性名转换为下划线格式
  relationName(propertyName: string): string {
    return snakeCase(propertyName);
  }

  // 重写 joinColumnName 方法，生成连接列名时将关系名和引用列名转换为下划线格式
  joinColumnName(relationName: string, referencedColumnName: string): string {
    return snakeCase(relationName + '_' + referencedColumnName);
  }

  // 重写 joinTableName 方法，生成连接表名时将两个表名和属性名转换为下划线格式
  joinTableName(
    firstTableName: string,
    secondTableName: string,
    firstPropertyName: string,
    secondPropertyName: string,
  ): string {
    return snakeCase(
      `${firstTableName}_${firstPropertyName.replace(
        /\./gi,
        '_',
      )}_${secondTableName}`,
    );
  }

  // 重写 joinTableColumnName 方法，生成连接表列名时将表名和属性名转换为下划线格式
  joinTableColumnName(
    tableName: string,
    propertyName: string,
    columnName?: string,
  ): string {
    return snakeCase(
      tableName + '_' + (columnName ? columnName : propertyName),
    );
  }

  // 重写 classTableInheritanceParentColumnName 方法，生成继承父表列名时将父表名和父表ID属性名转换为下划线格式
  classTableInheritanceParentColumnName(
    parentTableName: any,
    parentTableIdPropertyName: any,
  ): string {
    return snakeCase(parentTableName + '_' + parentTableIdPropertyName);
  }

  // 重写 eagerJoinRelationAlias 方法，生成急加载关系别名时将别名和属性路径转换为下划线格式
  eagerJoinRelationAlias(alias: string, propertyPath: string): string {
    return alias + '__' + propertyPath.replace('.', '_');
  }
}
