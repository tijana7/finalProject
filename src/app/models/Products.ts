export class Products {
  public name: string;
  public category: string;
  public imgSrc: string;
  public id: number;
  public price: number;
  public description: string;

  constructor(name: string, category: string, imgSrc: string, id: number, price: number, description: string) {
    this.name = name;
    this.category = category;
    this.imgSrc = imgSrc;
    this.id = id;
    this.price = price;
    this.description = description;
  }
}