export class Goals {
  showDescription:boolean;
  constructor(public id: number, public name: string, public description: any, public completDate: Date){
    this.showDescription=false;
  }  
}
