import { Component } from '@angular/core';
import { IProductCard } from '../../../interfaces/product-card';
import { ProductsService } from '../../products.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product',
  imports: [ProductCardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  products: IProductCard[] = [];

  constructor(private _productsService: ProductsService) {}

  ngOnInit(): void {
    this._productsService.getAnimes().subscribe(response => {
      this.products = response;
    });
  }
}
