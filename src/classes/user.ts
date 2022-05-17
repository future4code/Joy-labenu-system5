export class User {
    private id: string
    private name: string
    private email: string
    private birthDate: string
    private classID: string
  
    constructor(
          id: string,
          email: string,
          name: string,
          birthDate: string,
          classID: string
      ){
          console.log("Class User Constructor")
          this.id = id
          this.email = email
          this.name = name 
          this.birthDate = birthDate
          this.classID = classID
      }
  
      public getId(): string {
          return this.id
      }

      public getName(): string {
        return this.name
    }
  
      public getEmail(): string {
          return this.email
      }

      public getBirthDate(): string {
        return this.birthDate
    }

    public getClassID(): string {
        return this.classID
    }
}