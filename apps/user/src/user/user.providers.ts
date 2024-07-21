import { User } from './entities/user.mysql.entity';

export const UserProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (connection) => connection.getRepository(User),
    inject: ['MYSQL_DATA_SOURCE'],
  },
];
