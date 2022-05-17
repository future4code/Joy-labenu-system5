import { User } from "./user";

export class Student extends User {
    private hobby: string;
  
    constructor(
      id: string,
      name: string,
      email: string,
      birthDate: string,
      classID: string,
      hobby: string
      
    ) {
      super(id, name, email, birthDate, classID);
      console.log("Class Student constructor");
      this.hobby = hobby
    }
  
    public getHobby(): string {
      return this.hobby;
    }
}