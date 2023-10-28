// src/index.ts
import Student from './Student';
import Course from './Course';

const course1 = new Course('Math', 500);
const course2 = new Course('Science', 600);

const student1 = new Student('Ahmad');
const student2 = new Student('Ali');

student1.enroll(course1.getName());
student1.enroll(course2.getName());
student1.payTuition(course1.getFee() + course2.getFee());

student2.enroll(course1.getName());
student2.payTuition(course1.getFee());

student1.showStatus();
student2.showStatus();
