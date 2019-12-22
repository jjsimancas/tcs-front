import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {HttpClient} from '@angular/common/http';
import {ProductService} from '../../services/product.service';
import {NgForm} from '@angular/forms';
import {Responsecreate} from '../../models/responsecreate';

@Component({
  selector: 'app-create-record',
  templateUrl: './create-record.component.html',
  styleUrls: ['./create-record.component.css']
})
export class CreateRecordComponent implements OnInit {
  @Input() public guardar: boolean;
  @Input() public actualizar: boolean;
  public product: Product;
  public responseCreate: Responsecreate;
  public id: number;
  public producto: string;
  public descripcion: string;
  public cantidad: number;
  public marca: string;
  public categoria: string;



  constructor(
      public productService: ProductService
  ) {
    this.guardar = false;
    this.actualizar = false;
  }

  ngOnInit() {
  }

  createRecord(form: NgForm) {
    this.product = {
      id: form.value.id,
      producto: form.value.producto,
      descripcion: form.value.descripcion,
      cantidad: form.value.cantidad,
      marca: form.value.marca,
      categoria: form.value.categoria
    }
    return this.productService.createRecord(this.product).subscribe((data: Responsecreate) => {
      this.responseCreate = data;
      console.log(this.responseCreate);
    });
  }

}
