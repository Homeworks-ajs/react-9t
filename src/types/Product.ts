export default class Product {
  constructor(
    protected id: string, 
    protected name: string, 
    protected price: number
    ){}  

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }

  setName(newName: string): void {
    this.name = newName;
  }

  setPrice(newPrice: number): void {
    this.price = newPrice;
  }
}