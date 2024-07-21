"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const department_service_1 = require("../department/department.service");
let UserService = class UserService {
    constructor(userRepository, departmentService) {
        this.userRepository = userRepository;
        this.departmentService = departmentService;
    }
    async create(createUserDto) {
        const dep = await this.departmentService.findOne(createUserDto.departmentId);
        return this.userRepository.save(Object.assign(Object.assign({}, createUserDto), { department: dep }));
    }
    findAll() {
        return this.userRepository.find({
            relations: ['department'],
        });
    }
    findOne(id) {
        return this.userRepository.findOneBy({ id });
    }
    update(id, updateUserDto) {
        return this.userRepository.update({ id }, updateUserDto);
    }
    remove(id) {
        return this.userRepository.delete(id);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USER_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        department_service_1.DepartmentService])
], UserService);
//# sourceMappingURL=user.service.js.map