import { Injectable } from '@angular/core';
import { BaseHttp } from './basehttp.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsDatabase extends BaseHttp {
  constructor(public http: HttpClient) {
    super(http, 'products');
  }
}

