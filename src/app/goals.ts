export class Goals {
  showDescription:boolean;
  constructor(public id: number, public name: string, public description: any, public completeDate: Date){
    this.showDescription=false;
  }  
}
