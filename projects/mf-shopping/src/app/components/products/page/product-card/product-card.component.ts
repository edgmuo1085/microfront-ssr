import { Component, Input } from '@angular/core';
import { IProductCard } from '../../../interfaces/product-card';
import { CommonsLibService } from '@commons-lib';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product!: IProductCard;

  constructor(private _commonsLibService: CommonsLibService) {}

  clickCard(): void {
    this._commonsLibService.sendData({
      name: this.product!.name,
      price: this.product!.price,
    });
  }
}
