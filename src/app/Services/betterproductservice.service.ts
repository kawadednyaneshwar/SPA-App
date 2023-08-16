import { Injectable } from '@angular/core';
import { product } from '../HelperClasses/product';
import { GetProductsService } from './get-products.service';

@Injectable({
  providedIn: 'root'
})
export class BetterproductserviceService {
  products :  product[] | undefined;
  /**
   *
   */
  constructor(private getProductsService: GetProductsService) {
    this.products = getProductsService.products;
  }
  
  getProducts()  : product[] | undefined {
    return this.products;
  }
}
