import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  totalSub$: Subscription;
  total = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.totalSub$ = this.cartService.totalItems.subscribe((itemsNum) => {
      console.log('Subscribing to total...');
      this.total = itemsNum;
    });
  }

  ngOnDestroy(): void {
    this.totalSub$.unsubscribe();
  }
}
