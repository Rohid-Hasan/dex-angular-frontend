export class Contact {
  constructor(
    public name: string,
    public imageUrl: string,
    public lastContactDate: Date,
    public id?: number
  ) {}
}
