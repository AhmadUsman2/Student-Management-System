"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/Course.ts
class Course {
    constructor(name, fee) {
        this.name = name;
        this.fee = fee;
    }
    getName() {
        return this.name;
    }
    getFee() {
        return this.fee;
    }
}
exports.default = Course;
