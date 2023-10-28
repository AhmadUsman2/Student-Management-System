"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/Student.ts
class Student {
    constructor(name) {
        this.id = Student.idCounter++;
        this.name = name;
        this.courses = [];
        this.balance = 0;
    }
    enroll(course) {
        this.courses.push(course);
    }
    viewBalance() {
        return this.balance;
    }
    payTuition(amount) {
        this.balance += amount;
    }
    showStatus() {
        console.log(`Name: ${this.name}`);
        console.log(`Student ID: ${this.id}`);
        console.log(`Courses Enrolled: ${this.courses.join(', ')}`);
        console.log(`Balance: $${this.balance}`);
    }
}
Student.idCounter = 1;
exports.default = Student;
