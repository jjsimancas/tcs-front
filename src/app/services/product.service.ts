import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Product} from '../models/product';
import {catchError, retry} from 'rxjs/operators';
import {Responsecreate} from '../models/responsecreate';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:8080/producto';

  static handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Codigo de error: ${error.status}\nMensaje: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl)
        .pipe(
            retry(0),
            catchError(ProductService.handleError)
        );
  }

  getProduct(run): Observable<Product> {
    return this.http.get<Product>(this.apiUrl + '/' + run)
        .pipe(
            retry(0),
            catchError(ProductService.handleError)
        );
  }

  createRecord(product): Observable<Responsecreate> {
    return this.http.post<Responsecreate>(this.apiUrl, product)
        .pipe(
          retry(0),
          catchError(ProductService.handleError)
        );
  }

  updateRecord(product): Observable<Responsecreate> {
    return this.http.put<Responsecreate>(this.apiUrl, product)
        .pipe(
            retry(0),
            catchError(ProductService.handleError)
        );
  }
}
