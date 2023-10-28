"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const Student_1 = __importDefault(require("./Student"));
const Course_1 = __importDefault(require("./Course"));
const course1 = new Course_1.default('Math', 500);
const course2 = new Course_1.default('Science', 600);
const student1 = new Student_1.default('Ahmad');
const student2 = new Student_1.default('Ali');
student1.enroll(course1.getName());
student1.enroll(course2.getName());
student1.payTuition(course1.getFee() + course2.getFee());
student2.enroll(course1.getName());
student2.payTuition(course1.getFee());
student1.showStatus();
student2.showStatus();
