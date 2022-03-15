"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_asyncify_1 = __importDefault(require("express-asyncify"));
const router = (0, express_asyncify_1.default)((0, express_1.Router)());
router
    .get('/', getSucursales);
