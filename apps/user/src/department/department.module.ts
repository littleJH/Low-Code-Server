import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { Department } from './entities/department.mysql.entity';

@Module({
  controllers: [DepartmentController],
  providers: [
    DepartmentService,
    {
      provide: 'DEPARTMENT_REPOSITORY',
      useFactory: (connection) => connection.getRepository(Department),
      inject: ['MYSQL_DATA_SOURCE'],
    },
  ],
  exports: [DepartmentService],
})
export class DepartmentModule {}
