// src/Course.ts
export default class Course {
    private name: string;
    private fee: number;
  
    constructor(name: string, fee: number) {
      this.name = name;
      this.fee = fee;
    }
  
    public getName(): string {
      return this.name;
    }
  
    public getFee(): number {
      return this.fee;
    }
  }
  