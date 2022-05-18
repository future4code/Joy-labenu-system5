export class User {
    private id: string
    private name: string
    private email: string
    private birth_date: Date
    private class_id: string

    constructor(
        id: string,
        name: string,
        email: string,
        birth_date: Date,
        class_id: string
    ) {
        console.log("Class User Constructor")
        this.id = id
        this.name = name
        this.email = email
        this.birth_date = birth_date
        this.class_id = class_id
    }

    public getId() {
        return this.id;
    }
    public setId(id: string) {
        this.id = id;
    }
    public getName() {
        return this.name;
    }
    public setName(name: string) {
        this.name = name;
    }
    public getEmail() {
        return this.email;
    }
    public setEmail(email: string) {
        this.email = email;
    }
    public getBirthDate() {
        return this.birth_date;
    }
    public setBirthDate(birthDate: Date) {
        this.birth_date = birthDate;
    }
    public getClassId() {
        return this.class_id;
    }
    public setClassId(classId: string) {
        this.class_id = classId;
    }
}