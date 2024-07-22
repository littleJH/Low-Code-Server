import { Inject, Injectable } from '@nestjs/common';
import { Not, Repository } from 'typeorm';
import { User } from './entities/user.mysql.entity';
import { DepartmentService } from '../department/department.service';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    private departmentService: DepartmentService,
  ) {}

  async create(createUserDto) {
    const dep = await this.departmentService.findOne(
      createUserDto.departmentId,
    );
    return this.userRepository.save({
      ...createUserDto,
      department: dep,
    });
  }

  findAll() {
    return this.userRepository.find({
      select: ['id', 'name'],
      relations: ['department'],
      // cache: 5000,
    });
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  findNotOne(id: number) {
    return this.userRepository.find({
      where: {
        id: Not(id),
      },
    });
  }

  findNotOneWithQueryBuild(id: number) {
    const user = this.userRepository.createQueryBuilder('user');
    user.where('user.id != :id', { id });
    return user.getMany();
  }

  update(id: number, updateUserDto) {
    return this.userRepository.update({ id }, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
