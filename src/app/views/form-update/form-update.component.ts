import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Responsecreate} from '../../models/responsecreate';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product.service';

@Component({
    selector: 'app-form-update',
    templateUrl: './form-update.component.html',
    styleUrls: ['./form-update.component.css']
})
export class FormUpdateComponent implements OnInit {
    public record: Product;
    public response: Responsecreate;
    public id: number;
    public producto: string;
    public descripcion: string;
    public cantidad: number;
    public marca: string;
    public categoria: string;

    constructor(
        public productService: ProductService
    ) {
    }

    ngOnInit() {
    }

    updateRecord(form: NgForm) {
        this.record = {
            id: form.value.id,
            producto: form.value.producto,
            descripcion: form.value.descripcion,
            cantidad: form.value.cantidad,
            marca: form.value.marca,
            categoria: form.value.categoria
        };
        return this.productService.updateRecord(this.record).subscribe((data: Responsecreate) => {
            this.response = data;
            console.log(this.response);
        });
    }

}
