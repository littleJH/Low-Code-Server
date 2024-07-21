import { User } from './user.mongo.entity';

export const UserProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: async (AppDataSource) => AppDataSource.getMongoRepository(User),
    inject: ['MONGODB_DATA_SOURCE'],
  },
];
