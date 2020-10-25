import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CartItem } from '../models/CartItem';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  cartSub: Subscription;
  cartItems: CartItem[];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartSub = this.cartService.cartProducts
      // .pipe(tap(console.log))
      .subscribe((products) => {
        console.log(products);
        this.cartItems = products;
      });
  }

  totalPrice(): number {
    return this.cartItems.reduce(
      (prev, item) => prev + item.price * item.amount,
      0
    );
  }

  deleteProduct(id: number): void {
    this.cartService.removeItem(id);
  }
}
