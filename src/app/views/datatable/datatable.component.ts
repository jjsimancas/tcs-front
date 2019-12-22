import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product';


@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  @Input() products: Product[];
  dtOptions: DataTables.Settings = {};

  constructor() {}

  ngOnInit() {
    this.dtOptions = {
      lengthChange: false,
      pagingType: 'full_numbers',
      searching: false,
      responsive: true,
      paging: false

    };
  }

}
