import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products = [
    { id: 1, img: '🥔', name: 'Potato', price: 22 },
    { id: 2, img: '🍍', name: 'Pineapple', price: 33 },
    { id: 3, img: '🍺', name: 'Beer', price: 11 },
  ];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart(product: Product): void {
    this.cartService.addProduct(product);
  }
}
