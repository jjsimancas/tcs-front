import {Component, OnInit, Output} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {HttpClient} from '@angular/common/http';
import {Product} from '../../models/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo = 'assets/tata-logo.png';
  @Output() public products: Product[];


  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  loadProducts() {
    return this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
      console.log(this.products);
    });
  }

  clearProduct() {
    this.products = undefined;
  }
}
