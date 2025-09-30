"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
var common_1 = require("@nestjs/common");
var task_entity_1 = require("./task.entity");
var TaskService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var TaskService = _classThis = /** @class */ (function () {
        function TaskService_1() {
            this.tasks = [];
            this.nextId = 1;
        }
        TaskService_1.prototype.findAll = function () {
            return this.tasks;
        };
        TaskService_1.prototype.findOne = function (id) {
            var task = this.tasks.find(function (task) { return task.id === id; });
            if (!task) {
                throw new common_1.NotFoundException("Task with ID ".concat(id, " not found"));
            }
            return task;
        };
        TaskService_1.prototype.create = function (createTaskDto) {
            var task = new task_entity_1.Task({
                id: this.nextId++,
                title: createTaskDto.title,
                description: createTaskDto.description,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
            this.tasks.push(task);
            return task;
        };
        TaskService_1.prototype.update = function (id, updateTaskDto) {
            var task = this.findOne(id);
            Object.assign(task, updateTaskDto, { updatedAt: new Date() });
            return task;
        };
        TaskService_1.prototype.remove = function (id) {
            var index = this.tasks.findIndex(function (task) { return task.id === id; });
            if (index === -1) {
                throw new common_1.NotFoundException("Task with ID ".concat(id, " not found"));
            }
            this.tasks.splice(index, 1);
        };
        return TaskService_1;
    }());
    __setFunctionName(_classThis, "TaskService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TaskService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TaskService = _classThis;
}();
exports.TaskService = TaskService;
