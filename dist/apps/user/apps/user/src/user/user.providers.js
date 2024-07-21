"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProviders = void 0;
const user_mysql_entity_1 = require("./entities/user.mysql.entity");
exports.UserProviders = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (connection) => connection.getRepository(user_mysql_entity_1.User),
        inject: ['MYSQL_DATA_SOURCE'],
    },
];
//# sourceMappingURL=user.providers.js.map