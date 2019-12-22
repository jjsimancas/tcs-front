import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {Product} from '../../models/product';

@Component({
  selector: 'app-findervar',
  templateUrl: './findervar.component.html',
  styleUrls: ['./findervar.component.css']
})
export class FindervarComponent implements OnInit {
  public product: Product;
  public id: number;
  public title: string
  public OK: string;

  constructor(
      public productService: ProductService,
  ) {

    this.OK = 'OK';
    this.title = 'Id Producto';
  }

  ngOnInit() {}

  getProduct(id) {
    if (id !== undefined)   {
      return this.productService.getProduct(id).subscribe((data: Product) => {
        this.product = data;
      });
    }
  }

}
