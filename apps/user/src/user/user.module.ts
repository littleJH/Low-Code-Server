import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserProviders } from './user.providers';
import { DatabaseModule } from '@app/common/database/database.module';
import { DepartmentModule } from '../department/department.module';

@Module({
  imports: [forwardRef(() => DatabaseModule), DepartmentModule],
  controllers: [UserController],
  providers: [...UserProviders, UserService],
})
export class UserModule {}
