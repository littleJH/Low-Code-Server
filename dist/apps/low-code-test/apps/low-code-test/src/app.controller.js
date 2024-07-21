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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const business_exception_1 = require("./common/exceptions/business.exception");
let AppController = class AppController {
    constructor(appService, configService) {
        this.appService = appService;
        this.configService = configService;
    }
    getHello() {
        return this.appService.getHello();
    }
    getTestName() {
        return this.configService.get('TEST_VALUE').name;
    }
    findBusinessError() {
        const a = {};
        try {
            console.log(a.b.c);
        }
        catch (error) {
            throw new business_exception_1.BusinessException('你这个参数错了');
        }
        return this.appService.findAll();
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)('getHello'),
    (0, common_1.Version)('1'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('getTestName'),
    (0, common_1.Version)('1'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getTestName", null);
__decorate([
    (0, common_1.Get)('findBusinessError'),
    (0, common_1.Version)([common_1.VERSION_NEUTRAL, '1']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "findBusinessError", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService,
        config_1.ConfigService])
], AppController);
//# sourceMappingURL=app.controller.js.map