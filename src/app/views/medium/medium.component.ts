import {Component, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../models/product';

@Component({
  selector: 'app-medium',
  templateUrl: './medium.component.html'
})
export class MediumComponent implements OnInit {
  @Input() products: Product[];

  constructor() {}

  ngOnInit() {
  }

}
