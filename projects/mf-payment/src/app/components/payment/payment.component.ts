import { Component } from '@angular/core';
import { ICommonProduct } from '@commons-lib';

@Component({
  selector: 'app-payment',
  imports: [],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss',
})
export class PaymentComponent {
  products: ICommonProduct[] = [];

  constructor() {}

  ngOnInit(): void {
    const productsStorage = localStorage.getItem('products');
    console.log(productsStorage);

    if (productsStorage) {
      this.products = JSON.parse(productsStorage) as ICommonProduct[];
    }
  }
}
