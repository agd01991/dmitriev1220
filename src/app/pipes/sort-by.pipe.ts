import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(products: { id: number; amount: number, price: number }[], sortType: string): any[] {
    switch (sortType) {
      case 'time':
        products = products.sort((a,b) => (a.id < b.id ? 1 : -1));
        break;
      case 'id':
        products = products.sort((a,b) => (a.id > b.id ? 1 : -1));
        break;
      case 'higherPrice':
        products = products.sort((a, b) => (a.price < b.price ? 1 : -1));
        break;
      case 'lowerPrice':
        products = products.sort((a, b) => (a.price > b.price ? 1 : -1));
        break;
      case 'higherAmount':
        products = products.sort((a, b) =>
          a.amount > b.amount ? 1 : -1
        );
        break;
      case 'lowerAmount':
        products = products.sort((a, b) =>
          a.amount < b.amount ? 1 : -1
        );
        break;
    }
    return products;
  }
}
