import { Injectable } from '@angular/core';
import { product } from '../HelperClasses/product'

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {

  products :  product[] | undefined; 
  constructor() { 
      this.products = [
        new product(100,"Laptop",100),
        new product(100,"Pendrive",100),
        new product(100,"Mobile",100),
        new product(100,"Smart watch",100)
      ] 
  }

  // getProducts()  : product[] | undefined {
  //   return this.products;
  // }
}
