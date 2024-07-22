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
exports.Site = exports.API_TYPE = exports.STATUS_TYPE = exports.PAGE_TYPE = void 0;
const typeorm_1 = require("typeorm");
var PAGE_TYPE;
(function (PAGE_TYPE) {
    PAGE_TYPE[PAGE_TYPE["pc"] = 0] = "pc";
    PAGE_TYPE[PAGE_TYPE["mobile"] = 1] = "mobile";
    PAGE_TYPE[PAGE_TYPE["weapp"] = 2] = "weapp";
})(PAGE_TYPE || (exports.PAGE_TYPE = PAGE_TYPE = {}));
var STATUS_TYPE;
(function (STATUS_TYPE) {
    STATUS_TYPE[STATUS_TYPE["activated"] = 0] = "activated";
    STATUS_TYPE[STATUS_TYPE["inactive"] = 1] = "inactive";
    STATUS_TYPE[STATUS_TYPE["deleted"] = 2] = "deleted";
})(STATUS_TYPE || (exports.STATUS_TYPE = STATUS_TYPE = {}));
var API_TYPE;
(function (API_TYPE) {
    API_TYPE[API_TYPE["swagger"] = 0] = "swagger";
})(API_TYPE || (exports.API_TYPE = API_TYPE = {}));
let Site = class Site {
};
exports.Site = Site;
__decorate([
    (0, typeorm_1.ObjectIdColumn)(),
    __metadata("design:type", typeorm_1.ObjectId)
], Site.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Site.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], Site.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], Site.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], Site.prototype, "currentVersion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Site.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: STATUS_TYPE.inactive }),
    __metadata("design:type", Number)
], Site.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", String)
], Site.prototype, "createDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", String)
], Site.prototype, "updateDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ default: null }),
    __metadata("design:type", String)
], Site.prototype, "appointmentUp", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ default: null }),
    __metadata("design:type", String)
], Site.prototype, "appointmentDown", void 0);
exports.Site = Site = __decorate([
    (0, typeorm_1.Entity)()
], Site);
//# sourceMappingURL=site.mongo.entity.js.map