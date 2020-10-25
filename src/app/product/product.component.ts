import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products = [
    { img: '🥔', name: 'Potato', price: 22 },
    { img: '🍍', name: 'Pineapple', price: 33 },
    { img: '🍺', name: 'Beer', price: 11 },
  ];

  constructor() {}

  ngOnInit(): void {}

  addToCart(): void {}
}
