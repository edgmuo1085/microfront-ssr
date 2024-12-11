import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProductCard } from '../interfaces/product-card';
import { map, Observable } from 'rxjs';
import { IResponseAnime } from '../interfaces/anime-api';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _httpClient: HttpClient) {}

  getAnimes(): Observable<IProductCard[]> {
    return this._httpClient.get<IResponseAnime>('https://api.jikan.moe/v4/anime?q=kimetsu&sfw').pipe(
      map(response => {
        return response.data
          .filter(item => item.synopsis)
          .map<IProductCard>(item => ({
            urlImage: item.images.jpg.image_url,
            price: this._getNumberRandom(),
            name: item.title,
            description: item.synopsis!,
          }));
      })
    );
  }

  private _getNumberRandom() {
    return Math.floor(Math.random() * (500 - 1 + 1) + 1);
  }
}
