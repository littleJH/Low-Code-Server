"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageModule = void 0;
const common_1 = require("@nestjs/common");
const page_service_1 = require("./page.service");
const page_controller_1 = require("./page.controller");
const page_config_service_1 = require("./page-config/page-config.service");
const page_config_entity_1 = require("./page-config/page-config.entity");
const page_entity_1 = require("./entities/page.entity");
let PageModule = class PageModule {
};
exports.PageModule = PageModule;
exports.PageModule = PageModule = __decorate([
    (0, common_1.Module)({
        controllers: [page_controller_1.PageController],
        providers: [
            page_service_1.PageService,
            page_config_service_1.PageConfigService,
            {
                provide: 'PAGE_REPOSITORY',
                useFactory: async (AppDataSource) => await AppDataSource.getRepository(page_entity_1.Page),
                inject: ['MONGODB_DATA_SOURCE'],
            },
            {
                provide: 'PAGE_CONFIG_REPOSITORY',
                useFactory: async (AppDataSource) => await AppDataSource.getRepository(page_config_entity_1.PageConfig),
                inject: ['MONGODB_DATA_SOURCE'],
            },
        ],
    })
], PageModule);
//# sourceMappingURL=page.module.js.map