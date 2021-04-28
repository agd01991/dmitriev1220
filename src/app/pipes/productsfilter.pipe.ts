import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productsFilter',
})
export class ProductsFilterPipe implements PipeTransform {
  transform(
    products: { amount: number }[],
    check: boolean
  ): any[] {
    if (check)
      return products.filter(
        (product) =>
          product.amount > 0
      );
    return products;
  }
}

