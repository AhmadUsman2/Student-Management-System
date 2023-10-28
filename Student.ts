// src/Student.ts
export default class Student {
    private static idCounter = 1;
    private id: number;
    private name: string;
    private courses: string[];
    private balance: number;
  
    constructor(name: string) {
      this.id = Student.idCounter++;
      this.name = name;
      this.courses = [];
      this.balance = 0;
    }
  
    public enroll(course: string): void {
      this.courses.push(course);
    }
  
    public viewBalance(): number {
      return this.balance;
    }
  
    public payTuition(amount: number): void {
      this.balance += amount;
    }
  
    public showStatus(): void {
      console.log(`Name: ${this.name}`);
      console.log(`Student ID: ${this.id}`);
      console.log(`Courses Enrolled: ${this.courses.join(', ')}`);
      console.log(`Balance: $${this.balance}`);
    }
  }
  