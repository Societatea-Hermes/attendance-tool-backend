export class Session {
    private name: string;
    private date: Date;
    private id?: number;

    constructor(name: string, date: Date) {
      this.name = name;
      this.date = date;
    }

    public setName(name: string): void{
        this.name = name;
    }

    public getName(): string{
       return this.name;
    }

    public setDate(date: Date): void{
        this.date = date;
    }

    public getDate(): Date{
        return this.date;
    }
    public getID(): number{
        return this.id ? this.id : -1;
    }
    public setID(ID: number): void{
        this.id = ID;
    }
  }