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
exports.CreateSiteDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const site_mongo_entity_1 = require("../entities/site.mongo.entity");
class CreateSiteDto {
}
exports.CreateSiteDto = CreateSiteDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '', description: '站点id' }),
    __metadata("design:type", String)
], CreateSiteDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'http://localhost:3000/api/doc-json',
        description: '解析URL',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSiteDto.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: site_mongo_entity_1.API_TYPE.swagger,
        enum: site_mongo_entity_1.API_TYPE,
        description: '解析接口来源',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSiteDto.prototype, "apiType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '搭建服务', description: '站点名称' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSiteDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '搭建服务描述', description: '站点描述' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSiteDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: site_mongo_entity_1.PAGE_TYPE.pc,
        enum: site_mongo_entity_1.PAGE_TYPE,
        description: '站点类型',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateSiteDto.prototype, "type", void 0);
//# sourceMappingURL=create-site.dto.js.map