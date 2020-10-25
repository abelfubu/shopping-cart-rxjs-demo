import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../models/CartItem';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: CartItem[] = [];
  cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  total = new BehaviorSubject<number>(0);
  CART = 'CART';

  constructor() {
    this.cartItems = JSON.parse(localStorage.getItem(this.CART)) || [];
    this.updateCart();
  }

  get totalItems(): Observable<number> {
    return this.total.asObservable();
  }

  get cartProducts(): Observable<CartItem[]> {
    return this.cartItemsSubject.asObservable();
  }

  addProduct(product: Product): void {
    const cartItem = new CartItem(product);
    const pos = this.cartItems.findIndex((item) => item.id === product.id);
    if (pos >= 0) {
      this.cartItems[pos].amount++;
    } else {
      this.cartItems.push(cartItem);
    }
    this.updateCart();
    this.updateLocalStorage();
  }

  updateCart(): void {
    this.cartItemsSubject.next(this.cartItems);
    this.total.next(
      this.cartItems.reduce((prev, value) => prev + value.amount, 0)
    );
  }

  removeItem(id: number): void {
    this.cartItems = this.cartItems.filter((item) => item.id !== id);
    this.updateCart();
    this.updateLocalStorage();
  }

  updateLocalStorage(): void {
    localStorage.removeItem(this.CART);
    localStorage.setItem(this.CART, JSON.stringify(this.cartItems));
  }
}
