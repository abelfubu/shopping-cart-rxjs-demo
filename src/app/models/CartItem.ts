export class CartItem {
  id: number;
  name: string;
  price: number;
  img: string;
  amount = 1;
  constructor(item?: any) {
    for (const key in item) {
      this[key] = item[key];
    }
  }
}
