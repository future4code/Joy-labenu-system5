export class ClassTech {
  private id: string
  private name: string
  private module: string
  
  constructor(
    id: string,
    name: string,
    module: string
  ) {
    this.id = id
    this.name = name
    this.module = module
  }

  public getId(): string {
    return this.id
  }

  public getName(): string {
    return this.name
  }

  public getModule(): string {
    return this.module
  }
}