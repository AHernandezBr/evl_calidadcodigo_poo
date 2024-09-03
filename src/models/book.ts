export class Book {
  constructor(
    public id: number, 
    public title: string,
    public author: string,
    public year: number,
    public editorialId: number
  ) {}
}
