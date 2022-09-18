"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
function env(key, def = "") {
    return process.env[key] || def || null;
}
exports.env = env;
